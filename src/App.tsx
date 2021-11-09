import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCutest, addHamsters } from './store/actions/actions';
import axios from 'axios';
import TopNavigation from './components/TopNavigation';
import GameWrapper from './components/GameWrapper';
import Form from './components/Form';
import Scoreboard from './components/Scoreboard';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Home from './components/Home';
import Particles from "react-tsparticles";
import hamsterModel from './models/Hamster';
import './App.css';

function App() {
  const [on, setOn] = useState<boolean>(false);
  const dispatch = useDispatch();

  const allHamsters: hamsterModel[] = useSelector((state: any) => state.hamsters);

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
  },[]);

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
            <GameWrapper />
          </Route>
          <Route path="/gallery">
            <Form />
            <Gallery />
          </Route>
          <Route path="/scoreboard">
            <Scoreboard />
          </Route>    
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
