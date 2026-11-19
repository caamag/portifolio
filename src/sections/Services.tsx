import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { theme } from "../global/theme";
import { Container, Section, Card, GradientText } from "../global/styles";
import { SERVICES } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Card)`
  position: relative;
  height: 100%;
  overflow: hidden;
  transition: transform 250ms ease, border-color 250ms ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(400px 200px at 0% 0%, rgba(34, 211, 238, 0.1), transparent 70%);
    opacity: 0;
    transition: opacity 250ms ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(34, 211, 238, 0.35);
  }
  &:hover::before {
    opacity: 1;
  }

  .icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    font-size: 22px;
    color: ${theme.accent};
    background: linear-gradient(135deg, rgba(34, 211, 238, 0.16), rgba(129, 140, 248, 0.12));
    border: 1px solid rgba(34, 211, 238, 0.25);
    margin-bottom: 22px;
  }

  h3 {
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: ${theme.muted};
    font-size: 15px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    display: grid;
    gap: 8px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: ${theme.text};

    svg {
      color: ${theme.success};
      flex-shrink: 0;
    }
  }
`;

const Services = () => (
  <Section id="servicos" style={{ background: "rgba(10, 15, 28, 0.4)" }}>
    <Container>
      <SectionHeading
        center
        eyebrow="Serviços"
        title={
          <>
            Como posso <GradientText>ajudar seu projeto</GradientText>
          </>
        }
        subtitle="Do primeiro site à plataforma completa: soluções sob medida, com código de qualidade e foco no que importa para o seu negócio."
      />
      <Grid>
        {SERVICES.map(({ icon: Icon, title, description, bullets }, i) => (
          <Reveal key={title} delay={(i % 3) * 90}>
            <ServiceCard>
              <div className="icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {bullets.map((b) => (
                  <li key={b}>
                    <FiCheck /> {b}
                  </li>
                ))}
              </ul>
            </ServiceCard>
          </Reveal>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Services;
