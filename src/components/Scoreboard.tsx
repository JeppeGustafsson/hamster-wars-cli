import { useSelector } from 'react-redux';
import Hamster from './Hamster';
import HamsterModel from '../models/Hamster';
import MatchModel from '../models/Match';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Style from './Scoreboard.module.css';
import { useEffect, useState } from 'react';

const Scoreboard = (props: any) => {
        const hamsters = useSelector((state: any) => state.hamsters);
        const topWinners = useSelector((state: any) => state.topWinners);
        const topLosers = useSelector((state: any) => state.topLosers);
        const matches = useSelector((state: any) => state.matches);

        const history = useHistory();

    useEffect(() => {
          setTimeout(() => {
            props.update();
        }, 500);
    },[]);

    const handleDelete = (i: string, winner: HamsterModel, loser: HamsterModel) => {
      axios.delete(`/matches/${i}`).catch((error) => {
          if (error.response) {
              props.setErrorCode(error.response.status);
              props.setErrorMessage('It seems like something went wrong...'); 
              history.push('/error');
          }
      });
      axios.put(`/hamsters/${winner.id}`, 
      { wins: winner.wins - 1, defeats: winner.defeats, games: winner.games - 1 }).catch((error) => {
        if (error.response) {
            props.setErrorCode(error.response.status);
            props.setErrorMessage('It seems like something went wrong...'); 
            history.push('/error');
        }
    });
    axios.put(`/hamsters/${loser.id}`, 
      { wins: loser.wins, defeats: loser.defeats - 1, games: loser.games - 1 }).catch((error) => {
        if (error.response) {
            props.setErrorCode(error.response.status);
            props.setErrorMessage('It seems like something went wrong...'); 
            history.push('/error');
        }
    });
      setTimeout(() => {
          props.update();
      }, 1500);
  }

    console.log(matches)
    
    return (
        <section className={Style.Scoreboard}>
            <section className="flex-wrapper wrap">
              <section>
                <h2 className="text-center">Top winners</h2>
                <section className="flex-wrapper column">
                    {topWinners.map((i: HamsterModel) => <Hamster 
                      update={props.update}
                      setData={(e: HamsterModel) => props.setModalData(e)}
                      setActive={(e: boolean) => props.setActive(e)}
                      setErrorCode={(e: string) => props.setErrorCode(e)} 
                          setErrorMessage={(e: string) => props.setErrorMessage(e)}  
                      type={'list'} key={i.id} {...i} />)}
                </section>
              </section>
              <section>
                <h2 className="text-center">Top losers</h2>
                <section className="flex-wrapper column">
                    {topLosers.map((i: HamsterModel) => <Hamster 
                      update={props.update}
                      setData={(e: HamsterModel) => props.setModalData(e)}
                      setActive={(e: boolean) => props.setActive(e)}
                      setErrorCode={(e: string) => props.setErrorCode(e)} 
                          setErrorMessage={(e: string) => props.setErrorMessage(e)}  
                      type={'list'} key={i.id} {...i} />)} 
                </section>
              </section>
            </section>
            <section className="flex-wrapper column">
              <h2 className="text-center">History</h2>
              <section className="flex-wrapper wrap history">
              {matches?.map((match: MatchModel) => {
                let winner = hamsters.filter((h: HamsterModel) => h?.id === match?.winnerId);
                let loser = hamsters.filter((h: HamsterModel) => h?.id === match?.loserId);
                let id = match.id;
                winner = winner[0];
                loser = loser[0];
                return <div key={id} className={Style.MatchWrapper}>
                        <button className={Style.Remove} onClick={() => handleDelete(id, winner, loser)}>Delete match</button>
                        <div className="flex-wrapper">
                          <Hamster 
                            update={props.update}
                            setData={(e: HamsterModel) => props.setModalData(e)}
                            setActive={(e: boolean) => props.setActive(e)}
                            setErrorCode={(e: string) => props.setErrorCode(e)} 
                            setErrorMessage={(e: string) => props.setErrorMessage(e)}  
                            section='history' type='winner' {...winner} />
                          <Hamster 
                            update={props.update}
                            setData={(e: HamsterModel) => props.setModalData(e)}
                            setActive={(e: boolean) => props.setActive(e)}
                            setErrorCode={(e: string) => props.setErrorCode(e)} 
                            setErrorMessage={(e: string) => props.setErrorMessage(e)}  
                            section='history' type='loser' {...loser} />
                          </div>
                       </div>
              })} 
              </section>
            </section>
        </section>
    )    
}

export default Scoreboard;