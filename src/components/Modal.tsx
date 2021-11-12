import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HamsterModel from '../models/Hamster';
import MatchModel from '../models/Match';
import _ from 'lodash';
import axios from 'axios';
import Style from './Modal.module.css';
import { useEffect, useState } from 'react';

const Modal = (props: any) => {
    const history = useHistory();
    const hamsters: HamsterModel[] = useSelector((state: any) => state.hamsters);
    const matches: MatchModel[] = useSelector((state: any) => state.matches);
    const [defeatedHamsters, setDefeatedHamsters] = useState<string[]>(['name']);

    let i = 0;

    const handleDelete = (i: string) => {
        axios.delete(`/hamsters/${i}`).catch((error) => {
            if (error.response) {
                props.setErrorCode(error.response.status);
                props.setErrorMessage('It seems like something went wrong...'); 
                history.push('/error');
            }
        })
        props.set(false);
        setTimeout(() => {
            props.update();
        }, 500);
    }

    useEffect(() => {
        let defeatedNames: string[] = [];
        const matchesWon = matches?.filter((match) => {
            return match.winnerId === props.id;
        });
        hamsters?.map(hamster => {
            matchesWon?.map(match => {
                if (hamster.id === match.loserId) {
                    defeatedNames.push(hamster.name);
                }
            })
        })
        setDefeatedHamsters(defeatedNames);
    }, [props.id]);

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
                    <h3>{props.name} has defeated:</h3>
                    <ul>
                        { defeatedHamsters.map(name => {
                            i++;
                            return <li key={i}> {name} </li>
                        }) }
                    </ul>
                </article>
        </section>
    )
}

export default Modal;