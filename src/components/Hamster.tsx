import { useState } from 'react';
import Style from './Hamster.module.css';

const imagePath = '../images/';

const Hamster = (props: any) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <section className={props.type === 'winner' ? Style.HamsterWrapper + ' winner' : Style.HamsterWrapper 
        && props.type === 'loser' ? Style.HamsterWrapper + ' loser' : Style.HamsterWrapper && props.type === 'list' ? 
        Style.HamsterWrapper + ' list-item' : Style.HamsterWrapper}>
            <article onClick={() => setActive(true)} className={Style.Thumb}>
                <div className={Style.Overlay}></div>
                <h2>{props.name}</h2>
                <img src={props.imgName} alt="hamster-image" />
            </article>
            { props.game === true ? null : 
            <section className={active === true ? Style.Modal + ' active' : Style.Modal}>
                <article className={Style.InnerArticle}>
                    <button onClick={() => setActive(false)}>X</button>
                    <img src={imagePath + props.imgName} alt="hamster-image" />
                    <h2>{props.name}</h2>
                    <ul>
                        <li>Age: {props.age}</li>
                        <li>Loves: {props.loves}</li>
                        <li>Fav food: {props.favFood}</li>
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