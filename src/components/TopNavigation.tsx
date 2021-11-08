import { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './TopNavigation.module.css';

const TopNavigation = (props: any) => {
    const [active, setActive] = useState<boolean>(false);

    const handleClick = () => {
        active ? setActive(false) : setActive(true);
        props.menuState(props.isOn ? false : true);
    }

    return (
        <nav className={active ? Style.TopNavigation + ' active' : Style.TopNavigation}>
            <button className={Style.BurgerButton} onClick={handleClick}>
                <div className={Style.line}></div>
                <div className={Style.line}></div>
                <div className={Style.line}></div>
            </button>
            <div className={Style.SideMenu}>
                <ul>
                    <Link onClick={handleClick} to="/">Home</Link>
                    <Link onClick={handleClick} to="/game">Game</Link>
                    <Link onClick={handleClick} to="/gallery">Gallery</Link>
                    <Link onClick={handleClick} to="/scoreboard">Scoreboard</Link>
                </ul>
            </div>
        </nav>
    )
}

export default TopNavigation;