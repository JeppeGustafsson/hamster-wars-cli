import Style from './Footer.module.css';

const Footer = (props: any) => {
    
    return (
        <section className={Style.Footer}>
            <footer>
                <ul>
                <li>Hamster Wars</li>
                <li><a href="https://github.com/JeppeGustafsson/hamster-wars-cli" target="_blank">Github</a></li>
                </ul>
            </footer>
        </section>
    )    
}

export default Footer;