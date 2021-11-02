import { useEffect, useState } from 'react';
import Style from './Hamster.module.css';
import axios from 'axios';

const URL = 'https://murmuring-fortress-23751.herokuapp.com/';

const Hamster = (props: any) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <section className={props.type === 'winner' ? Style.HamsterWrapper + ' winner' : Style.HamsterWrapper 
        && props.type === 'loser' ? Style.HamsterWrapper + ' loser' : Style.HamsterWrapper && props.type === 'list' ? 
        Style.HamsterWrapper + ' list-item' : Style.HamsterWrapper}>
            <article onClick={() => setActive(true)} className={Style.Thumb}>
                <div className={Style.Overlay}></div>
                <h2>{props.name}</h2>
                <img src={props.imgName.includes('http') ? props.imgName : URL + props.imgName} alt="hamster-image" />
            </article>
            { props.game === true ? null : 
            <section className={active === true ? Style.Modal + ' active' : Style.Modal}>
                <article className={Style.InnerArticle}>
                    <button onClick={() => setActive(false)}>X</button>
                    <img src={props.imgName.includes('http') ? props.imgName : URL + props.imgName} alt="hamster-image" />
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