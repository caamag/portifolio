import styled, { keyframes } from "styled-components";
import { FiArrowRight, FiMessageCircle, FiZap, FiLayers } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { theme } from "../global/theme";
import { Container, GradientText, PrimaryButton, GhostButton, glass } from "../global/styles";
import { LINKS, TECH, whatsappWithText } from "../data/content";
import Profile from "../assets/profile.jpeg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6); }
  100% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
`;

const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 130px 0 90px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(${theme.border} 1px, transparent 1px),
      linear-gradient(90deg, ${theme.border} 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
    opacity: 0.45;
    pointer-events: none;
  }
`;

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 48px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 64px;
  }
`;

const Text = styled.div`
  > * {
    animation: ${fadeUp} 800ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
  }
  > *:nth-child(2) { animation-delay: 80ms; }
  > *:nth-child(3) { animation-delay: 160ms; }
  > *:nth-child(4) { animation-delay: 240ms; }
  > *:nth-child(5) { animation-delay: 320ms; }
  > *:nth-child(6) { animation-delay: 400ms; }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px 7px 12px;
  border-radius: 999px;
  border: 1px solid ${theme.border};
  background: rgba(15, 23, 42, 0.6);
  font-size: 13px;
  font-weight: 500;
  color: ${theme.muted};

  i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${theme.success};
    animation: ${pulse} 1.6s ease-out infinite;
  }
`;

const Title = styled.h1`
  margin-top: 24px;
  font-size: clamp(40px, 6vw, 68px);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.035em;
`;

const Lead = styled.p`
  margin-top: 24px;
  max-width: 540px;
  font-size: 18px;
  color: ${theme.muted};

  strong {
    color: ${theme.text};
    font-weight: 600;
  }
`;

const Actions = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media (max-width: 480px) {
    a { flex: 1 1 100%; }
  }
`;

const Stack = styled.div`
  margin-top: 44px;

  span {
    display: block;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${theme.subtle};
    margin-bottom: 14px;
  }
`;

const StackIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${theme.border};
  background: rgba(15, 23, 42, 0.6);
  display: grid;
  place-items: center;
  font-size: 20px;
  color: ${theme.muted};
  transition: all 150ms;

  &:hover {
    color: ${theme.accent};
    border-color: rgba(34, 211, 238, 0.4);
    transform: translateY(-2px);
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 28px;

  a {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    border: 1px solid ${theme.border};
    display: grid;
    place-items: center;
    color: ${theme.muted};
    transition: all 150ms;

    &:hover {
      color: ${theme.accent};
      border-color: ${theme.accent};
    }
  }
`;

/* ---------- visual ---------- */

const Visual = styled.div`
  position: relative;
  justify-self: center;
  width: min(440px, 100%);
  aspect-ratio: 4 / 5;
  animation: ${fadeUp} 1s 200ms cubic-bezier(0.2, 0.7, 0.2, 1) both;

  @media (max-width: 980px) {
    width: min(380px, 86%);
  }
`;

const Glow = styled.div`
  position: absolute;
  inset: 8% -6% -4% -6%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.35), rgba(129, 140, 248, 0.2) 45%, transparent 70%);
  filter: blur(30px);
`;

const Photo = styled.div`
  position: relative;
  height: 100%;
  border-radius: 28px;
  padding: 1px;
  background: linear-gradient(160deg, rgba(34, 211, 238, 0.7), rgba(129, 140, 248, 0.15) 40%, rgba(148, 163, 184, 0.1));
  box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.8);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 30%;
    border-radius: 27px;
    filter: saturate(0.85) contrast(1.05);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: 27px;
    background: linear-gradient(180deg, transparent 55%, rgba(6, 9, 18, 0.85));
  }
`;

const FloatCard = styled.div`
  ${glass};
  position: absolute;
  z-index: 2;
  background: rgba(10, 15, 28, 0.82);
  border-color: ${theme.borderStrong};
  box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.8);
  animation: ${float} 6s ease-in-out infinite;
`;

const CodeCard = styled(FloatCard)`
  left: -14%;
  bottom: 9%;
  padding: 14px 18px;
  font-family: "JetBrains Mono", monospace;
  font-size: 12.5px;
  line-height: 1.75;
  white-space: nowrap;

  .bar {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
    i { width: 8px; height: 8px; border-radius: 50%; background: ${theme.subtle}; }
    i:nth-child(1) { background: #f87171; }
    i:nth-child(2) { background: #fbbf24; }
    i:nth-child(3) { background: ${theme.success}; }
  }
  .k { color: ${theme.accent2}; }
  .p { color: ${theme.text}; }
  .s { color: #fbbf24; }
  .c { color: ${theme.muted}; }

  @media (max-width: 600px) {
    left: -6%;
    font-size: 11px;
  }
`;

const StatCard = styled(FloatCard)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  animation-delay: -3s;

  .icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: rgba(34, 211, 238, 0.12);
    color: ${theme.accent};
    font-size: 18px;
  }
  strong { display: block; font-size: 18px; line-height: 1.1; }
  small { font-size: 12px; color: ${theme.muted}; }
`;

const StatTop = styled(StatCard)`
  top: 8%;
  right: -12%;

  @media (max-width: 600px) {
    right: -4%;
  }
`;

const StatMid = styled(StatCard)`
  top: 40%;
  right: -16%;
  animation-delay: -1.5s;

  .icon {
    background: rgba(129, 140, 248, 0.14);
    color: ${theme.accent2};
  }

  @media (max-width: 600px) {
    right: -4%;
  }
`;

const heroStack = [TECH.react, TECH.next, TECH.ts, TECH.node, TECH.nest, TECH.postgres, TECH.tailwind];

const Hero = () => (
  <Wrapper id="inicio">
    <Container>
      <Grid>
        <Text>
          <Badge>
            <i /> Disponível para novos projetos
          </Badge>
          <Title>
            Sites e plataformas web que <GradientText>geram resultado</GradientText> para o seu negócio.
          </Title>
          <Lead>
            Sou <strong>Caio Lopes</strong>, desenvolvedor full-stack. Transformo ideias em sites,
            e-commerces e sistemas rápidos, modernos e prontos para escalar — do design ao deploy.
          </Lead>
          <Actions>
            <PrimaryButton href="#projetos">
              Ver projetos <FiArrowRight />
            </PrimaryButton>
            <GhostButton
              href={whatsappWithText("Olá Caio! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.")}
              target="_blank"
              rel="noreferrer"
            >
              Vamos conversar <FiMessageCircle />
            </GhostButton>
          </Actions>
          <Stack>
            <span>Tecnologias que uso</span>
            <StackIcons>
              {heroStack.map(({ name, icon: Icon }) => (
                <TechIcon key={name} title={name} aria-label={name}>
                  <Icon />
                </TechIcon>
              ))}
            </StackIcons>
          </Stack>
          <Socials>
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </Socials>
        </Text>

        <Visual>
          <Glow />
          <Photo>
            <img src={Profile} alt="Foto de Caio Lopes" />
          </Photo>

          <StatTop>
            <div className="icon"><FiZap /></div>
            <div>
              <strong>3+ anos</strong>
              <small>de experiência</small>
            </div>
          </StatTop>

          <StatMid>
            <div className="icon"><FiLayers /></div>
            <div>
              <strong>Full-stack</strong>
              <small>front, back & mobile</small>
            </div>
          </StatMid>

          <CodeCard aria-hidden>
            <div className="bar"><i /><i /><i /></div>
            <div><span className="k">const</span> <span className="p">projeto</span> = {"{"}</div>
            <div>&nbsp;&nbsp;foco: <span className="s">"resultado"</span>,</div>
            <div>&nbsp;&nbsp;código: <span className="s">"limpo"</span>,</div>
            <div>&nbsp;&nbsp;entrega: <span className="s">"no prazo"</span></div>
            <div>{"}"}<span className="c">;</span></div>
          </CodeCard>
        </Visual>
      </Grid>
    </Container>
  </Wrapper>
);

export default Hero;
