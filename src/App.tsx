import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCutest, addHamsters, addWinners, addLosers, addMatch } from './store/actions/actions';
import axios from 'axios';
import TopNavigation from './components/TopNavigation';
import GameWrapper from './components/GameWrapper';
import Form from './components/Form';
import Scoreboard from './components/Scoreboard';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Modal from './components/Modal';
import './App.css';
import HamsterModel from './models/Hamster';

function App() {
  const [on, setOn] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [modalData, setModalData] = useState<HamsterModel>({
    id: '',
    name: '',
    favFood: '',
    imgName: '',
    loves: '',
    age: 0,
    wins: 0,
    defeats: 0,
    games: 0
  });
  const [update, setUpdate] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/hamsters/cutest')
    .then(response => {
      dispatch(addCutest(response.data));
    });
    axios.get('/hamsters')
    .then(response => {
      dispatch(addHamsters(response.data));
    });
    axios.get('/winners')
      .then(response => {
        dispatch(addWinners(response.data));
      });
    axios.get('/losers')
      .then(response => {
        dispatch(addLosers(response.data))
      });
    axios.get('/matches')
      .then(response => {
        dispatch(addMatch(response.data))
      });
      console.log('updated!')
  },[update]);

  const updateData = () => {
    update === true ? setUpdate(false) : setUpdate(true);
  }

  return (
    <div className="App">
      <header>
        <TopNavigation isOn={on} menuState={(payload: boolean): void => setOn(payload)} />
      </header>
      <div className={on ? 'overlay on' : 'overlay'} />
      <Modal 
        id={modalData.id}
        name={modalData.name}
        favFood={modalData.favFood}
        imgName={modalData.imgName}
        loves={modalData.loves}
        age={modalData.age}
        wins={modalData.wins}
        defeats={modalData.defeats}
        games={modalData.games}
        active={active}
        set={(e: boolean) => setActive(e)}
        update={updateData}
        setErrorCode={(e: number) => setErrorCode(e)} 
        setErrorMessage={(e: string) => setErrorMessage(e)} 
      /> 
      <main>
        <Switch>
          <Route exact path="/">
            <Home 
              setModalData={(e: HamsterModel) => setModalData(e)}
              setActive={(e: boolean) => setActive(e)}
            />
          </Route>
          <Route path="/game">
            <GameWrapper 
              setErrorCode={(e: number) => setErrorCode(e)} 
              setErrorMessage={(e: string) => setErrorMessage(e)} 
              update={updateData} />
          </Route>
          <Route path="/gallery">
            <Form 
              setErrorCode={(e: number) => setErrorCode(e)} 
              setErrorMessage={(e: string) => setErrorMessage(e)} 
              update={updateData} />
            <Gallery 
              setModalData={(e: HamsterModel) => setModalData(e)}
              setActive={(e: boolean) => setActive(e)}
              setErrorCode={(e: number) => setErrorCode(e)} 
              setErrorMessage={(e: string) => setErrorMessage(e)} 
              update={updateData} />
          </Route>
          <Route path="/scoreboard">
            <Scoreboard 
              setModalData={(e: HamsterModel) => setModalData(e)}
              setActive={(e: boolean) => setActive(e)}
              setErrorCode={(e: number) => setErrorCode(e)} 
              setErrorMessage={(e: string) => setErrorMessage(e)} 
              update={updateData} />
          </Route>    
          <Route path="/error">
            <ErrorPage message={errorMessage} code={errorCode} />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
