import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { theme } from "../global/theme";
import { Container, Section, GradientText, glass } from "../global/styles";
import { PROJECTS } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.a<{ $glow: string }>`
  ${glass};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  transition: transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${theme.borderStrong};
    box-shadow: 0 30px 60px -30px ${(p) => p.$glow};
  }

  &:hover .cover::before {
    opacity: 1;
    transform: scale(1.1);
  }

  &:hover .arrow {
    background: ${theme.accent};
    color: #04121a;
    border-color: ${theme.accent};
    transform: rotate(45deg);
  }
`;

const Cover = styled.div<{ $glow: string }>`
  position: relative;
  height: 170px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-bottom: 1px solid ${theme.border};
  background-color: ${theme.bgSoft};
  background-image: linear-gradient(${theme.border} 1px, transparent 1px),
    linear-gradient(90deg, ${theme.border} 1px, transparent 1px);
  background-size: 28px 28px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 60%, ${(p) => p.$glow}, transparent 65%);
    opacity: 0.7;
    transition: opacity 300ms ease, transform 500ms ease;
  }

  img {
    position: relative;
    width: auto;
    max-width: 72%;
    object-fit: contain;
  }
`;

const Wordmark = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;

  strong {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1;
    background: linear-gradient(135deg, #ffffff 0%, #c7d2fe 55%, #818cf8 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  span {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${theme.subtle};
  }
`;

const Tag = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${theme.accent};
  background: rgba(6, 9, 18, 0.75);
  border: 1px solid rgba(34, 211, 238, 0.3);
  backdrop-filter: blur(6px);
`;

const Index = styled.span`
  position: absolute;
  top: 14px;
  right: 16px;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  color: ${theme.subtle};
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 22px 22px 20px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    font-size: 14.5px;
    color: ${theme.muted};
    margin-bottom: 20px;
  }
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
`;

const TechList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 9px;
    font-size: 12px;
    font-weight: 500;
    color: ${theme.muted};
    border-radius: 8px;
    border: 1px solid ${theme.border};
    background: rgba(15, 23, 42, 0.6);

    svg {
      color: ${theme.accent};
    }
  }
`;

const Arrow = styled.span`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${theme.borderStrong};
  display: grid;
  place-items: center;
  font-size: 18px;
  transition: all 200ms ease;
`;

const Projects = () => (
  <Section id="projetos">
    <Container>
      <SectionHeading
        eyebrow="Projetos selecionados"
        title={
          <>
            Trabalhos que estão <GradientText>no ar</GradientText>
          </>
        }
        subtitle="Plataformas SaaS, portais de atendimento, e-commerce, design system e páginas de vendas — projetos reais, usados por empresas e seus clientes todos os dias."
      />
      <Grid>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 90}>
            <ProjectCard href={p.href} target="_blank" rel="noreferrer" $glow={p.glow}>
              <Cover className="cover" $glow={p.glow}>
                <Tag>{p.category}</Tag>
                <Index>{String(i + 1).padStart(2, "0")}</Index>
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.title}
                    style={{
                      height: p.logoHeight ?? 32,
                      filter: p.invertLogo ? "invert(1)" : undefined,
                    }}
                  />
                ) : p.wordmark ? (
                  <Wordmark>
                    <strong>{p.wordmark.title}</strong>
                    {p.wordmark.caption && <span>{p.wordmark.caption}</span>}
                  </Wordmark>
                ) : null}
              </Cover>
              <Body>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <Footer>
                  <TechList>
                    {p.tech.map(({ name, icon: Icon }) => (
                      <li key={name}>
                        <Icon /> {name}
                      </li>
                    ))}
                  </TechList>
                  <Arrow className="arrow" aria-hidden>
                    <FiArrowUpRight />
                  </Arrow>
                </Footer>
              </Body>
            </ProjectCard>
          </Reveal>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Projects;
