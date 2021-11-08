import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addHamsters, addCutest, addWinners, addLosers } from './store/actions/actions';
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

  const particlesInit = (main: any) => {
    console.log(main);
  };

  const particlesLoaded = (container: any) => {

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
        {/* <div id="particle-div" className="particle-wrapper">
          {on ? null : 
                  <Particles
                      id="tsparticles"
                      init={particlesInit}
                      loaded={particlesLoaded}
                      options={{
                          background: {
                              color: {
                                  value: "#111111",
                              },
                              size: "cover",
                              position: "50% 50%",
                              repeat: "no-repeat"
                      },
                      fpsLimit: 60,
                      interactivity: {
                          events: {
                              onHover: {
                              enable: true,
                              mode: "grab",
                              },
                              onClick: {
                                  enable: true
                              }
                          }
                      },
                      particles: {
                          color: {
                              value: "#ffffff",
                          },
                      collisions: {
                          enable: true,
                      },
                      move: {
                          direction: "none",
                          enable: true,
                          outMode: "bounce",
                          random: true,
                          speed: 0.4,
                          straight: false,
                      },
                      number: {
                          density: {
                              enable: true,
                              value_area: 800,
                          },
                          value: allHamsters.length,
                      },
                      opacity: {
                          value: 0.5,
                      },
                      shape: {
                          type: "images",
                          stroke: {
                              width: 0,
                              color: "000"
                          },
                          image: allHamsters.map((hamster) => {
                                  return { src: hamster.imgName, width: 100, height: 100 }
                          }),
                          polygon: {
                              nb_sides: 0
                          }
                      },
                      size: {
                          random: true,
                          value: 20,
                      },
                      },
                      detectRetina: false
                      }}
                  />}
        </div> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
