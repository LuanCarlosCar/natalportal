import { useRef } from "react";
import { Container, Description, Title } from "./_styles";
import { useInView, motion } from "framer-motion";

interface Props {
    title: string;
    description: string;
    path: string;
}
export default function Card(props: Props) {
    const { title, description, path } = props;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (

        <motion.div
            whileHover={{ scale: [null, 1.3, 1.2] }}
            transition={{ duration: 0.5 }}
        >
            <section ref={ref}>
                <Container style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    <img src={path} />
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Container>

            </section>

        </motion.div>


    )
}