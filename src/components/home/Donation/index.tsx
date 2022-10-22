import { Container, Descripton, Title } from "./_styles";
import donation from '../../../assets/imgs/donation.svg'
import Button from "../../Button";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Donation() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Container>
            <section ref={ref}>

                <div className="flex-Column" style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    <Title>
                        Feliz Natal e <br />
                        Feliz Ano Novo!
                    </Title>
                    <Descripton>Nessas festas de fim de ano mande um presente para <br /> a pessoa amada e compartilhe a alegria do Natal.</Descripton>
                    <Button label='Fazer uma doação' />
                </div>

            </section>

            <section ref={ref} style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"

            }}  >
                <img src={donation.src} alt="Doação" />

            </section>


        </Container>
    )
}