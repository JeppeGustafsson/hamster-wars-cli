import { useState } from 'react';
import Modal from './Modal';
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
              /> }
            <article onClick={() => setActive(true)} className={Style.Thumb}>
                <div className={Style.Overlay}></div>
                <h2>{props.name}</h2>
                <img src={props.imgName} alt="hamster-image" />
            </article>
        </section>
    )
}

export default Hamster;