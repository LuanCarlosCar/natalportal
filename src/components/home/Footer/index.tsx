import { Container, NavBar, TitleLogo } from "./_styles";
import logo from '../../../assets/imgs/logo.svg'

import facebook from '../../../assets/imgs/facebook.svg'
import twitter from '../../../assets/imgs/twitter.svg'
import instagram from '../../../assets/imgs/instagram.svg'
import youtube from '../../../assets/imgs/youtube.svg'
import linkedin from '../../../assets/imgs/linkedin.svg'


export default function Footer() {

    return (<Container>

        <div className="flex-img">
            <img src={logo.src} alt="logo" />
            <TitleLogo>Feliz Natal</TitleLogo>
        </div>
        <NavBar>
            <li><a> <img src={facebook.src} alt="facebook" /></a></li>
            <li><a> <img src={twitter.src} alt="twitter" /></a></li>
            <li><a> <img src={instagram.src} alt="instagram" /></a></li>
            <li><a> <img src={youtube.src} alt="youtube" /></a></li>
            <li><a> <img src={linkedin.src} alt="linkedin" /></a></li>
        </NavBar>
    </Container>)
}