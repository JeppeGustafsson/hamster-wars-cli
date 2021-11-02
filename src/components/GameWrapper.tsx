import { useCallback, useState } from 'react';
import Style from './GameWrapper.module.css';
import HamsterModel from '../models/Hamster';
import Hamster from './Hamster';
import checkImage from '../images/check-mark-256.png';
import crossImage from '../images/x-mark-256.png';
import axios from 'axios';

const GameWrapper = (props: any) => {
    const [winner, setWinner] = useState<HamsterModel>(props?.data[0]);
    const [loser, setLoser] = useState<HamsterModel>(props?.data[0]);
    const [fadeIn, setFadeIn] = useState<boolean>(true);
    const [fadeOut, setFadeOut] = useState<string>('');

    const randOne: number = Math.floor(Math.random() * props?.data?.length);
    const randTwo: number = Math.floor(Math.random() * props?.data?.length);

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

    },[winner, loser]);

    return (
        <section className={Style.GameWrapper}>
            { winner === undefined && loser === undefined ? null : 
            <section className={Style.Previous} style={fadeIn === true ? {animationName: 'fadeOut'} : {animationName: 'fadeIn'}}>
                <article className={Style.PreHamster} onClick={() => handleClick(props.data[randOne], props.data[randTwo])}>
                    <img className={Style.IndicatorImage} src={checkImage} alt="check" />
                    <Hamster game={true} type='winner' {...winner} />
                </article>
                <article className={Style.PreHamster} onClick={() => handleClick(props.data[randTwo], props.data[randOne])}>
                    <img className={Style.IndicatorImage} src={crossImage} alt="cross" />
                    <Hamster game={true} type='loser' {...loser} />
                </article>
            </section> }
            <section className={Style.Active}>
                <article 
                    onClick={() => handleClick(props.data[randOne], props.data[randTwo])} 
                    className={Style.HamsterOne + fadeOut}>
                    <Hamster game={true} {...props.data[randOne === randTwo ? randOne + 1 : randOne]} />
                </article>
                <article 
                    onClick={() => handleClick(props.data[randTwo], props.data[randOne])} 
                    className={Style.HamsterTwo + fadeOut}>
                   <Hamster game={true} {...props.data[randTwo === randOne ? randTwo + 1 : randTwo]} />
                </article>
            </section>
        </section>
    )    
}

export default GameWrapper;