import styled from "styled-components";
import { FiBriefcase, FiMapPin, FiCalendar, FiCircle } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { theme } from "../global/theme";
import { Container, Section, Card, GradientText, GhostButton } from "../global/styles";
import { LINKS, STACK_GROUPS } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Story = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    color: ${theme.muted};
    margin-bottom: 14px;

    strong {
      color: ${theme.text};
      font-weight: 600;
    }
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin: 14px 0 28px;
  padding-top: 24px;
  border-top: 1px solid ${theme.border};

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid ${theme.border};
    display: grid;
    place-items: center;
    color: ${theme.accent};
  }

  small {
    display: block;
    font-size: 12px;
    color: ${theme.subtle};
  }

  span {
    font-size: 14px;
    font-weight: 600;
  }

  .online {
    color: ${theme.success};
    display: inline-flex;
    align-items: center;
    gap: 6px;
    svg { fill: currentColor; font-size: 8px; }
  }
`;

const Buttons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const StackCard = styled(Card)`
  height: 100%;

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  > p {
    color: ${theme.muted};
    font-size: 14px;
    margin-bottom: 22px;
  }
`;

const Group = styled.div`
  & + & {
    margin-top: 22px;
  }

  h4 {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${theme.subtle};
    margin-bottom: 10px;
  }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid ${theme.border};
  background: rgba(15, 23, 42, 0.6);
  font-size: 13px;
  font-weight: 500;

  svg {
    font-size: 16px;
    color: ${theme.accent};
  }
`;

const About = () => (
  <Section id="sobre">
    <Container>
      <SectionHeading
        eyebrow="Sobre mim"
        title={
          <>
            Tecnologia a serviço do <GradientText>seu negócio</GradientText>
          </>
        }
        subtitle="Mais do que escrever código, eu entrego soluções que resolvem problemas reais e trazem retorno."
      />

      <Grid>
        <Reveal>
          <Story>
            <h3>Olá, eu sou o Caio 👋</h3>
            <p>
              Iniciei minha jornada em 2023 como desenvolvedor Front-end e consultor Zendesk,
              unindo a criação de soluções personalizadas — automações, gatilhos e configurações
              nativas — ao desenvolvimento de interfaces com <strong>React</strong>. Com o tempo,
              me dediquei totalmente ao desenvolvimento, expandindo para{" "}
              <strong>React Native</strong> e back-end com <strong>Node.js</strong>.
            </p>
            <p>
              Hoje atuo na <strong>BCR.CX</strong>, onde sou responsável pelo front-end de diversos
              produtos, com foco em aplicações que rodam dentro da Zendesk e integrações com APIs
              e fluxos de atendimento.
            </p>

            <InfoGrid>
              <Info>
                <div className="icon"><FiBriefcase /></div>
                <div>
                  <small>Atuação</small>
                  <span>Desenvolvedor Full-stack</span>
                </div>
              </Info>
              <Info>
                <div className="icon"><FiMapPin /></div>
                <div>
                  <small>Localização</small>
                  <span>Brasil · Remoto</span>
                </div>
              </Info>
              <Info>
                <div className="icon"><FiCalendar /></div>
                <div>
                  <small>Desenvolvendo desde</small>
                  <span>2023</span>
                </div>
              </Info>
              <Info>
                <div className="icon"><FiCircle /></div>
                <div>
                  <small>Disponibilidade</small>
                  <span className="online"><FiCircle /> Aberto a projetos</span>
                </div>
              </Info>
            </InfoGrid>

            <Buttons>
              <GhostButton href={LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <FiArrowUpRight />
              </GhostButton>
              <GhostButton href={LINKS.github} target="_blank" rel="noreferrer">
                GitHub <FiArrowUpRight />
              </GhostButton>
            </Buttons>
          </Story>
        </Reveal>

        <Reveal delay={120}>
          <StackCard>
            <h3>Minha stack</h3>
            <p>Ferramentas modernas para entregar produtos rápidos, seguros e fáceis de manter.</p>
            {STACK_GROUPS.map((group) => (
              <Group key={group.title}>
                <h4>{group.title}</h4>
                <Chips>
                  {group.items.map(({ name, icon: Icon }) => (
                    <Chip key={name}>
                      <Icon /> {name}
                    </Chip>
                  ))}
                </Chips>
              </Group>
            ))}
          </StackCard>
        </Reveal>
      </Grid>
    </Container>
  </Section>
);

export default About;
