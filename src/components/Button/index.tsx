import { ContainerButton } from "./_styles";
import imgButton from '../../assets/imgs/imgButton.svg'

interface Props {
    label: string;
}

export default function Button(props: Props) {

    return (<ContainerButton><img src={imgButton.src} />{props.label}</ContainerButton>)
}