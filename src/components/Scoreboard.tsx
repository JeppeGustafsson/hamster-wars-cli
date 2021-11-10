import { useSelector } from 'react-redux';
import Hamster from './Hamster';
import HamsterModel from '../models/Hamster';
import MatchModel from '../models/Match';
import Style from './Scoreboard.module.css';
import { useEffect } from 'react';

const Scoreboard = (props: any) => {
    const hamsters = useSelector((state: any) => state.hamsters);
    const topWinners = useSelector((state: any) => state.topWinners);
    const topLosers = useSelector((state: any) => state.topLosers);
    const matches = useSelector((state: any) => state.matches);

    useEffect(() => {
      setTimeout(() => {
        props.update();
    }, 500);
    },[]);
    
    return (
        <section className={Style.Scoreboard}>
            <section className="flex-wrapper wrap">
              <section>
                <h2 className="text-center">Top winners</h2>
                <section className="flex-wrapper column">
                    {topWinners.map((i: HamsterModel) => <Hamster 
                      update={props.update}
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
                      setErrorCode={(e: string) => props.setErrorCode(e)} 
                          setErrorMessage={(e: string) => props.setErrorMessage(e)}  
                      type={'list'} key={i.id} {...i} />)} 
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
                        <Hamster 
                          update={props.update}
                          setErrorCode={(e: string) => props.setErrorCode(e)} 
                          setErrorMessage={(e: string) => props.setErrorMessage(e)}  
                          section='history' type='winner' {...winner} />
                        <Hamster 
                          update={props.update}
                          setErrorCode={(e: string) => props.setErrorCode(e)} 
                          setErrorMessage={(e: string) => props.setErrorMessage(e)}  
                          section='history' type='loser' {...loser} />
                      </div>
              })} 
              </section>
            </section>
        </section>
    )    
}

export default Scoreboard;