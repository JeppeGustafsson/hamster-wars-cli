import { useCallback, useState} from 'react';
import Style from './GameWrapper.module.css';
import HamsterModel from '../models/Hamster';
import Hamster from './Hamster';
import axios from 'axios';
import { useSelector } from 'react-redux';

const GameWrapper = (props: any) => {
    const allHamsterObjects: HamsterModel[] = useSelector((state: any) => state.hamsters);

    const [winner, setWinner] = useState<HamsterModel>(allHamsterObjects[0]);
    const [loser, setLoser] = useState<HamsterModel>(allHamsterObjects[0]);
    const [fadeIn, setFadeIn] = useState<boolean>(true);
    const [fadeOut, setFadeOut] = useState<string>('');

    const randOne: number = Math.floor(Math.random() * allHamsterObjects?.length);
    const randTwo: number = Math.floor(Math.random() * allHamsterObjects?.length);

    const handleClick = useCallback((a: HamsterModel, b: HamsterModel) => {
        setFadeOut(' out');
        setTimeout(() => {
            setFadeOut('');
        }, 1000);
        setWinner(a);
        setLoser(b);

        fadeIn === true ? setFadeIn(false) : setFadeIn(true);

        axios.put(`/hamsters/${winner?.id}`,
        { wins: winner?.wins + 1, defeats: winner?.defeats, games: winner?.games + 1 });
        axios.put(`/hamsters/${loser?.id}`,
        { wins: loser?.wins, defeats: loser?.defeats + 1, games: loser?.games + 1 });
        axios.post('/matches', { loserId: loser.id, winnerId: winner.id });

    },[winner, loser]);

    return (
        <section className={Style.GameWrapper}>
            { winner === undefined && loser === undefined ? null : 
            <section className={Style.Previous} style={fadeIn === true ? {animationName: 'fadeOut'} : {animationName: 'fadeIn'}}>
                <article className={Style.PreHamster} onClick={() => handleClick(allHamsterObjects[randOne], allHamsterObjects[randTwo])}>
                    <Hamster game={true} type='winner' {...winner} />
                </article>
                <article className={Style.PreHamster} onClick={() => handleClick(allHamsterObjects[randTwo], allHamsterObjects[randOne])}>
                    <Hamster game={true} type='loser' {...loser} />
                </article>
            </section> }
            <section className={Style.Active}>
                <article 
                    onClick={() => handleClick(allHamsterObjects[randOne], allHamsterObjects[randTwo])} 
                    className={Style.HamsterOne + fadeOut}>
                    <Hamster game={true} {...allHamsterObjects[randOne === randTwo ? randOne + 1 : randOne]} />
                </article>
                <article 
                    onClick={() => handleClick(allHamsterObjects[randTwo], allHamsterObjects[randOne])} 
                    className={Style.HamsterTwo + fadeOut}>
                   <Hamster game={true} {...allHamsterObjects[randTwo === randOne ? randTwo + 1 : randTwo]} />
                </article>
            </section>
        </section>
    )    
}

export default GameWrapper;