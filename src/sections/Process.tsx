import styled from "styled-components";
import { theme } from "../global/theme";
import { Container, Section, GradientText } from "../global/styles";
import { PROCESS } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const Steps = styled.ol`
  position: relative;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  /* connecting line */
  &::before {
    content: "";
    position: absolute;
    top: 36px;
    left: 8%;
    right: 8%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), rgba(129, 140, 248, 0.5), transparent);
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 44px;
    &::before { display: none; }
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    row-gap: 0;
  }
`;

const Step = styled.li`
  position: relative;
  text-align: center;

  .icon {
    position: relative;
    width: 72px;
    height: 72px;
    margin: 0 auto 18px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 24px;
    color: ${theme.accent};
    background: ${theme.bgSoft};
    border: 1px solid rgba(34, 211, 238, 0.35);
    box-shadow: 0 0 0 6px ${theme.bg}, 0 0 30px -6px rgba(34, 211, 238, 0.5);
    transition: transform 250ms ease, background 250ms ease, color 250ms ease;
  }

  &:hover .icon {
    transform: translateY(-4px);
    background: ${theme.accent};
    color: #04121a;
  }

  .num {
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    color: ${theme.subtle};
  }

  h3 {
    font-size: 17px;
    font-weight: 700;
    margin: 4px 0 8px;
  }

  p {
    font-size: 14px;
    color: ${theme.muted};
  }

  @media (max-width: 560px) {
    display: grid;
    grid-template-columns: 56px 1fr;
    column-gap: 18px;
    text-align: left;
    padding-bottom: 28px;

    .icon {
      grid-row: span 3;
      width: 56px;
      height: 56px;
      font-size: 20px;
      margin: 0;
    }

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      left: 28px;
      top: 64px;
      bottom: 6px;
      width: 1px;
      background: rgba(34, 211, 238, 0.3);
    }
  }
`;

const Process = () => (
  <Section id="processo" style={{ background: "rgba(10, 15, 28, 0.4)" }}>
    <Container>
      <SectionHeading
        center
        eyebrow="Como trabalho"
        title={
          <>
            Um processo <GradientText>claro e transparente</GradientText>
          </>
        }
        subtitle="Você acompanha cada etapa e sabe exatamente o que está sendo feito — sem surpresas no caminho."
      />
      <Steps>
        {PROCESS.map(({ icon: Icon, title, description }, i) => (
          <Reveal key={title} delay={i * 80}>
            <Step>
              <div className="icon">
                <Icon />
              </div>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Step>
          </Reveal>
        ))}
      </Steps>
    </Container>
  </Section>
);

export default Process;
