import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Style from './Modal.module.css';

const Modal = (props: any) => {
    const history = useHistory();

    const handleDelete = (i: string) => {
        axios.delete(`/hamsters/${i}`).catch((error) => {
            if (error.response) {
                props.setErrorCode(error.response.status);
                props.setErrorMessage('It seems like something went wrong...'); 
                history.push('/error');
            }
        })
        props.set(false);
        props.update();
    }

    return (
        <section className={props.active === true ? Style.Modal + ' active' : Style.Modal}>
                <article className={Style.InnerArticle}>
                    <button className={Style.Close} onClick={() => props.set(false)}>X</button>
                    <button className={Style.Remove} onClick={() => handleDelete(props.id)}>Remove</button>
                    <img src={props.imgName} alt="hamster-image" />
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
        </section>
    )
}

export default Modal;