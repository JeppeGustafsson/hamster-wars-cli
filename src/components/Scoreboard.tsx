import { useSelector } from 'react-redux';
import Hamster from './Hamster';
import HamsterModel from '../models/Hamster';
import Style from './Scoreboard.module.css';

const Scoreboard = (props: any) => {
    const topWinners = useSelector((state: any) => state.topWinners);
    const topLosers = useSelector((state: any) => state.topLosers);
    
    return (
        <section className={Style.Scoreboard}>
            <section className="flex-wrapper">
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
        </section>
    )    
}

export default Scoreboard;