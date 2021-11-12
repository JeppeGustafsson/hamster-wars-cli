import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import hamsterModel from '../models/Hamster';
import Hamster from '../components/Hamster';
import HamsterModel from '../models/Hamster';
import Style from './Home.module.css';

const Home = (props: any) => {
    const hamsters: hamsterModel[] = useSelector((state: any) => state.cutest);
    const rand: number = Math.floor(Math.random() * hamsters.length);

    const randomCutestHamster: hamsterModel = {
        id: hamsters[rand]?.id,
        wins: hamsters[rand]?.wins,
        defeats: hamsters[rand]?.defeats,
        games: hamsters[rand]?.games,
        favFood: hamsters[rand]?.favFood,
        name: hamsters[rand]?.name,
        loves: hamsters[rand]?.loves,
        imgName: hamsters[rand]?.imgName,
        age: hamsters[rand]?.age
    }

    console.log(randomCutestHamster)

    return (
        <section className={Style.Home}>
            <div className="logo-wrapper">
            <h1 className="title">Hamster wars</h1>
            </div>
            <div style={{position: "relative"}} className="flex-wrapper between">
            <p><b>Welcome to Hamster Wars!</b><br/>If you LOVE cute hamsters, then this is the place to be.<br/>To choose which hamster is cutest, just navigate to the game section and start playing!<br/>Want to see all the super cute hamsters? Then head on over to the gallery.<br/>And if you're not patient enough, go to the scoreboard to see all the cutest hamsters!<br/>That's it!</p>
            <article>
                <h2>Top rated hamster!</h2>
                <Hamster 
                    setData={(e: HamsterModel) => props.setModalData(e)}
                    setActive={(e: boolean) => props.setActive(e)}
                    {...randomCutestHamster}
                />
            </article>
            </div>
        </section>
    )
}

export default Home;