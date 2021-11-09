import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addHamsters, addWinners, addLosers, addMatch } from '../store/actions/actions';
import axios from 'axios';
import Hamster from './Hamster';
import HamsterModel from '../models/Hamster';
import MatchModel from '../models/Match';
import Style from './Scoreboard.module.css';

const Scoreboard = (props: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
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
    },[]);

    const hamsters = useSelector((state: any) => state.hamsters);
    const topWinners = useSelector((state: any) => state.topWinners);
    const topLosers = useSelector((state: any) => state.topLosers);
    const matches = useSelector((state: any) => state.matches);
    
    return (
        <section className={Style.Scoreboard}>
            <section className="flex-wrapper wrap">
              <section>
                <h2 className="text-center">Top winners</h2>
                <section className="flex-wrapper column">
                    {topWinners.map((i: HamsterModel) => <Hamster type={'list'} key={i.id} {...i} />)}
                </section>
              </section>
              <section>
                <h2 className="text-center">Top losers</h2>
                <section className="flex-wrapper column">
                    {topLosers.map((i: HamsterModel) => <Hamster type={'list'} key={i.id} {...i} />)} 
                </section>
              </section>
            </section>
            <section className="flex-wrapper column">
              <h2 className="text-center">History</h2>
              <section className="flex-wrapper wrap history">
              {matches[0]?.map((match: MatchModel) => {
                let winner = hamsters.filter((h: HamsterModel) => h?.id === match?.winnerId);
                let loser = hamsters.filter((h: HamsterModel) => h?.id === match?.loserId);
                let id = match.id;
                winner = winner[0];
                loser = loser[0];
                return <div key={id} className="flex-wrapper">
                        <Hamster section='history' type='winner' {...winner} />
                        <Hamster section='history' type='loser' {...loser} />
                      </div>
              })} 
              </section>
            </section>
        </section>
    )    
}

export default Scoreboard;