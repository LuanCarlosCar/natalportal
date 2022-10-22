import Card from "../../Card";
import { CardList, Container, Description, Title } from "./_styles";
import gift from '../../../assets/imgs/gift.svg'
import bell from '../../../assets/imgs/bell1.svg'
import sweet from '../../../assets/imgs/sweet.svg'
import half from '../../../assets/imgs/half.svg'

export default function Accessory() {
    return (
        <Container>
            <Title>Acessórios</Title>
            <Description>Nessas festas de fim de ano mande um presente para a<br /> pessoa amada e compartilhe a alegria do Natal.</Description>
            <CardList>
                <Card title="Presentes" description="Eles são os melhores presentes que existem." path={gift.src} />
                <Card title="Enfeites" description="Dê uma decoração." path={bell.src} />
                <Card title="Doces" description="Aproveite os doces natalinos." path={sweet.src} />
                <Card title="Muito amor" description="Aproveite os sentimentos que duram para sempre." path={half.src} />
            </CardList>
        </Container>
    )
}