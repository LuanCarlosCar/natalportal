import { Container, Descripton, Title } from "./_styles";
import donation from '../../../assets/imgs/shared.svg'
import Button from "../../Button";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Donation2() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Container>

            <section ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"

            }}  >
                <img src={donation.src} alt="Doação" />

            </section>


            <section ref={ref} style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"

            }}  >
                <div className="flex-Column">
                    <Title>
                        Comemore com<br />
                        muito amor!
                    </Title>
                    <Descripton>Nestes feriados, festeje com muito amor e paz,<br /> oferecendo muitas bênçãos aos nossos entes queridos,<br /> amigos e vizinhos, desejando-lhes um Feliz Natal.</Descripton>
                    <Button label='Fazer doação' />
                </div>

            </section>
        </Container>
    )
}