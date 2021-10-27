import { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './TopNavigation.module.css';
import HamsterLogo from '../images/hamster-logo.png';

const TopNavigation = () => {

    return (
        <nav className={Style.TopNavigation}>
            <img src={HamsterLogo} alt="logo" />
            <ul>
                <Link to="/">Home</Link>
                <Link to="/game">Game</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/scoreboard">Scoreboard</Link>
            </ul>
        </nav>
    )
}

export default TopNavigation;