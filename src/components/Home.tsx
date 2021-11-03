import { useSelector } from 'react-redux';
import hamsterModel from '../models/Hamster';
import Hamster from '../components/Hamster';
import Style from './Home.module.css';
import HamsterLogo from '../images/hamster-logo.png';

const Home = () => {
    const hamsters: hamsterModel[] = useSelector((state: any) => state.hamsters);
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

    return (
        <section>
            <div className="logo-wrapper">
            <img src={HamsterLogo} alt="logo" />
            <h1 className="title">Hamster wars</h1> {/* Egen komponent till Home kanske? */}
            </div>
            <div className="flex-wrapper">
            <p><b>Welcome to Hamster Wars!</b><br/>If you LOVE cute hamsters, then this is the place to be.<br/>To choose which hamster is cutest, just navigate to the game section and start playing!<br/>Want to see all the super cute hamsters? Then head on over to the gallery.<br/>And if you're not patient enough, go to the scoreboard to see all the cutest hamsters!<br/>That's it!</p>
            <article>
                <h2>Top rated hamster!</h2>
                <Hamster 
                    {...randomCutestHamster}
                />
            </article>
            </div>
        </section>
    )
}

export default Home;