import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import HamsterModel from './models/Hamster';
import TopNavigation from './components/TopNavigation';
import Hamster from './components/Hamster';
import GameWrapper from './components/GameWrapper';
import Form from './components/Form';
import HamsterLogo from './images/hamster-logo.png';
import './App.css';

const all_URL: string = 'https://boiling-sierra-82200.herokuapp.com/hamsters';
const cutest_URL: string = 'https://boiling-sierra-82200.herokuapp.com/hamsters/cutest';
const matches_URL: string = 'https://boiling-sierra-82200.herokuapp.com/matches';
const topWinners_URL: string = 'https://boiling-sierra-82200.herokuapp.com/winners';
const topLosers_URL: string = 'https://boiling-sierra-82200.herokuapp.com/losers';

function App() {
  const [all, setAll] = useState<HamsterModel[]>([]);
  const [cutest, setCutest] = useState<HamsterModel[]>([]);
  const [topWinners, setTopWinners] = useState<HamsterModel[]>([]);
  const [topLosers, setTopLosers] = useState<HamsterModel[]>([]);

  const randCutestNum: number = Math.floor(Math.random() * cutest.length);
  const randomCutestHamster: HamsterModel = {
    id: cutest[randCutestNum]?.id,
    wins: cutest[randCutestNum]?.wins,
    defeats: cutest[randCutestNum]?.defeats,
    games: cutest[randCutestNum]?.games,
    favFood: cutest[randCutestNum]?.favFood,
    name: cutest[randCutestNum]?.name,
    loves: cutest[randCutestNum]?.loves,
    imgName: cutest[randCutestNum]?.imgName,
    age: cutest[randCutestNum]?.age
  }

  //axios request to get all hamster objects from database
  useEffect(() => {
    axios.get(all_URL)
      .then(response => {
        console.log(response.data);
        setAll(response.data);
      });
    axios.get(cutest_URL)
      .then(response => {
        console.log(response.data);
        setCutest(response.data);
      });
    axios.get(topWinners_URL)
      .then(response => {
        console.log(response.data);
        setTopWinners(response.data);
      });
    axios.get(topLosers_URL)
      .then(response => {
        console.log(response.data);
        setTopLosers(response.data);
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
            <section>
              <div className="logo-wrapper">
                <img src={HamsterLogo} alt="logo" />
                <h1 className="title">Hamster wars</h1> {/* Egen komponent till Home kanske? */}
              </div>
              <div className="flex-wrapper">
                <p><b>Welcome to Hamster Wars!</b><br/>If you LOVE cute hamsters, then this is the place to be.<br/>To choose which hamster is cutest, just navigate to the game section and start playing!<br/>Want to see all the super cute hamsters? Then head on over to the gallery.<br/>And if you're not patient enough, go to the scoreboard to see all the cutest hamsters!<br/>That's it!</p>
                <article>
                  <h2>Top rated hamster!</h2>
                  <Hamster 
                    {...randomCutestHamster}
                  />
                </article>
              </div>
            </section>
          </Route>
          <Route path="/game">
            <GameWrapper data={all} />
          </Route>
          <Route path="/gallery">
            <Form />
            <section className="inner-wrapper">
              {all.map(i => <Hamster key={i.id} {...i} />)} {/* Egen komponent till gallery? */}
            </section>
          </Route>
          <Route path="/scoreboard">
            <section className="flex-wrapper">
              <section>
                <h2 className="text-center">Top winners</h2>
                <section className="flex-wrapper column">
                    {topWinners.map(i => <Hamster type={'list'} key={i.id} {...i} />)} {/* Egen komponent till scoreboard kanske? */}
                </section>
              </section>
              <section>
                <h2 className="text-center">Top losers</h2>
                <section className="flex-wrapper column">
                    {topLosers.map(i => <Hamster type={'list'} key={i.id} {...i} />)} 
                </section>
              </section>
            </section>
          </Route>    
        </Switch>
      </main>
      <footer>
        <ul>
          <li>Hamster Wars</li>
          <li><a href="https://github.com/JeppeGustafsson/hamster-wars-cli" target="_blank">Github</a></li> {/* Egen komponent till footer kanske? */}
        </ul>
      </footer>
    </div>
  );
}

export default App;
