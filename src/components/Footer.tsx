import Style from './Footer.module.css';

const Footer = (props: any) => {
    
    return (
        <section className={Style.Footer}>
            <footer>
                <ul>
                <li><a href="https://github.com/JeppeGustafsson/hamster-wars-cli" target="_blank">Github</a></li>
                </ul>
                <svg className={Style.Wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,181.3C672,203,768,213,864,186.7C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </footer>
        </section>
    )    
}

export default Footer;