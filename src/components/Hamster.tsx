import { useState } from 'react';
import Modal from './Modal';
import checkImage from '../images/check-mark-256.png';
import crossImage from '../images/x-mark-256.png';
import Style from './Hamster.module.css';

const Hamster = (props: any) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <section className={props.type === 'winner' ? Style.HamsterWrapper + ' winner' : Style.HamsterWrapper 
        && props.type === 'loser' ? Style.HamsterWrapper + ' loser' : Style.HamsterWrapper && props.type === 'list' ? 
        Style.HamsterWrapper + ' list-item' : Style.HamsterWrapper}>
            { props.game === true ? null : 
              <Modal 
                id={props.id}
                name={props.name}
                favFood={props.favFood}
                imgName={props.imgName}
                loves={props.loves}
                age={props.age}
                wins={props.wins}
                defeats={props.defeats}
                games={props.games}
                active={active}
                set={(e: boolean) => setActive(e)}
                update={props.update}
                setErrorCode={(e: string) => props.setErrorCode(e)} 
                setErrorMessage={(e: string) => props.setErrorMessage(e)} 
              /> }
            { props.type === 'winner' || props.type === 'loser' ? 
                <div className="text-block">
                    <p>Wins: {props.wins}</p> 
                    <p>Losses: {props.defeats}</p>
                </div> : null}
            <article onClick={() => setActive(true)} className={Style.Thumb}>
                { props.type === 'winner' ? <img className={Style.IndicatorImage} src={checkImage} alt="check" /> : null}
                { props.type === 'loser' ? <img className={Style.IndicatorImage} src={crossImage} alt="cross" /> : null }
                <div className={Style.Overlay}></div>
                <h2>{props.name}</h2>
                <img src={props.imgName} alt="hamster-image" />
            </article>
        </section>
    )
}

export default Hamster;