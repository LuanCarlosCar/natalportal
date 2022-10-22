import { Container, NavBar, TitleLogo } from "./_styles";
import logo from '../../../assets/imgs/logo.svg'

export default function Header() {
    return (
        <Container>
            <div className="flex-img">
                <img src={logo.src} alt="logo" />
                <TitleLogo>Feliz Natal</TitleLogo>
            </div>

            <NavBar>
                <li><a>início</a></li>
                <li><a>Acessórios</a></li>
                <li><a>Doação</a></li>
                <li><a>Contato</a></li>
            </NavBar>

        </Container>
    )
}