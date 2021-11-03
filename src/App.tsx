import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addHamsters, addCutest, addWinners, addLosers } from './store/actions/actions';
import axios from 'axios';
import TopNavigation from './components/TopNavigation';
import GameWrapper from './components/GameWrapper';
import Form from './components/Form';
import Scoreboard from './components/Scoreboard';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/hamsters')
      .then(response => {
        dispatch(addHamsters(response.data));
      });
    axios.get('/hamsters/cutest')
      .then(response => {
        dispatch(addCutest(response.data));
      });
    axios.get('/winners')
      .then(response => {
        dispatch(addWinners(response.data));
      });
    axios.get('/losers')
      .then(response => {
        dispatch(addLosers(response.data))
      });
  },[]);

  return (
    <div className="App">
      <header>
        <TopNavigation />
      </header>
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
