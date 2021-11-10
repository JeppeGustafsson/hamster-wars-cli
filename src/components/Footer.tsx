import Style from './Footer.module.css';
import Wave from '../images/wave.png';

const Footer = (props: any) => {
    
    return (
        <section className={Style.Footer}>
            <footer>
                <ul>
                <li><a href="https://github.com/JeppeGustafsson/hamster-wars-cli" target="_blank">Github</a></li>
                </ul>
                <img className={Style.Wave} src={Wave} alt="wave image" />
            </footer>
        </section>
    )    
}

export default Footer;