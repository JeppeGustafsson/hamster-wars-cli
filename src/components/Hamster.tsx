import { useState } from 'react';
import Style from './Hamster.module.css';
import HamsterModel from '../models/Hamster';

const Hamster = (props: HamsterModel) => {
    return (
        <article className={Style.HamsterWrapper}>
            <h2>{props.name}</h2>
            <img src={`https://murmuring-fortress-23751.herokuapp.com/${props.imgName}`} alt="" />
        </article>
    )
}

export default Hamster;