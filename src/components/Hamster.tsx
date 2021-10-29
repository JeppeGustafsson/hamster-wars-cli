import { useState } from 'react';
import Style from './Hamster.module.css';
import HamsterModel from '../models/Hamster';

const Hamster = (props: any) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <section className={props.type === 'winner' ? Style.HamsterWrapper + ' winner' : Style.HamsterWrapper 
        && props.type === 'loser' ? Style.HamsterWrapper + ' loser' : Style.HamsterWrapper}>
            <article onClick={() => setActive(true)} className={Style.Thumb}>
                <div className={Style.Overlay}></div>
                <h2>{props.name}</h2>
                <img src={`https://murmuring-fortress-23751.herokuapp.com/${props.imgName}`} alt="" />
            </article>
            { props.game === true ? null : 
            <section className={active === true ? Style.Modal + ' active' : Style.Modal}>
                <article className={Style.InnerArticle}>
                    <button onClick={() => setActive(false)}>X</button>
                    <img src={`https://murmuring-fortress-23751.herokuapp.com/${props.imgName}`} alt="" />
                    <h2>{props.name}</h2>
                    <ul>
                        <li>Age: {props.age}</li>
                        <li>Loves: {props.loves}</li>
                        <li>Games played: {props.games}</li>
                        <li>Wins: {props.wins}</li>
                        <li>Losses: {props.defeats}</li>
                    </ul>
                </article>
            </section> }
        </section>
    )
}

export default Hamster;