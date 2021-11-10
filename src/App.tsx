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
import './App.css';

function App() {
  const [on, setOn] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);
  const [errorCode, setErrorCode] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/hamsters/cutest')
    .then(response => {
      dispatch(addCutest(response.data));
      console.log(response.data)
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
      console.log('update success')
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
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <GameWrapper 
              setErrorCode={(e: string) => setErrorCode(e)} 
              setErrorMessage={(e: string) => setErrorMessage(e)} 
              update={updateData} />
          </Route>
          <Route path="/gallery">
            <Form 
              setErrorCode={(e: string) => setErrorCode(e)} 
              setErrorMessage={(e: string) => setErrorMessage(e)} 
              update={updateData} />
            <Gallery 
              setErrorCode={(e: string) => setErrorCode(e)} 
              setErrorMessage={(e: string) => setErrorMessage(e)} 
              update={updateData} />
          </Route>
          <Route path="/scoreboard">
            <Scoreboard 
              setErrorCode={(e: string) => setErrorCode(e)} 
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
