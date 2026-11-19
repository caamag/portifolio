import { useState, type FormEvent } from "react";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { theme } from "../global/theme";
import { Container, Section, GradientText, glass } from "../global/styles";
import { LINKS, whatsappWithText } from "../data/content";
import { Eyebrow } from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const Panel = styled.div`
  ${glass};
  position: relative;
  overflow: hidden;
  padding: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  &::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    left: -200px;
    bottom: -260px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.18), transparent 65%);
    pointer-events: none;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 32px 24px;
  }
  @media (max-width: 480px) {
    padding: 28px 18px;
  }
`;

const Intro = styled.div`
  position: relative;

  h2 {
    font-size: clamp(30px, 4vw, 42px);
    line-height: 1.15;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  > p {
    margin-top: 16px;
    color: ${theme.muted};
    font-size: 17px;
  }
`;

const Channels = styled.div`
  margin-top: 32px;
  display: grid;
  gap: 12px;
`;

const Channel = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid ${theme.border};
  background: rgba(6, 9, 18, 0.5);
  transition: border-color 150ms, transform 150ms;

  &:hover {
    border-color: rgba(34, 211, 238, 0.4);
    transform: translateX(4px);
  }

  .icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    font-size: 18px;
    color: ${theme.accent};
    background: rgba(34, 211, 238, 0.1);
  }

  small {
    display: block;
    font-size: 12px;
    color: ${theme.subtle};
  }

  span {
    font-size: 15px;
    font-weight: 600;
  }
`;

const Form = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  align-content: start;

  label {
    display: grid;
    gap: 8px;
    font-size: 13px;
    font-weight: 500;
    color: ${theme.muted};
  }

  .full {
    grid-column: 1 / -1;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1px solid ${theme.border};
    background: rgba(6, 9, 18, 0.6);
    color: ${theme.text};
    font: inherit;
    font-size: 15px;
    outline: none;
    transition: border-color 150ms, box-shadow 150ms;

    &::placeholder {
      color: ${theme.subtle};
    }

    &:focus {
      border-color: ${theme.accent};
      box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15);
    }
  }

  select option {
    background: ${theme.surfaceSolid};
  }

  textarea {
    min-height: 130px;
    resize: vertical;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Submit = styled.button`
  grid-column: 1 / -1;
  height: 54px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  font-size: 15px;
  color: #04121a;
  background: ${theme.gradient};
  box-shadow: 0 10px 30px -10px rgba(34, 211, 238, 0.6);
  transition: transform 180ms, box-shadow 180ms;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px -10px rgba(34, 211, 238, 0.75);
  }
`;

const Note = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 12.5px;
  color: ${theme.subtle};
`;

const PROJECT_TYPES = [
  "Site institucional / Landing page",
  "Plataforma web / SaaS",
  "E-commerce",
  "Integração / Zendesk App",
  "Design System",
  "Outro",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", type: PROJECT_TYPES[0], message: "" });

  const update =
    (field: keyof typeof form) =>
    (e: { target: { value: string } }) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `Olá Caio! Me chamo ${form.name.trim()}${form.company.trim() ? `, da ${form.company.trim()}` : ""}.`,
      `Tenho interesse em: ${form.type}.`,
      "",
      form.message.trim(),
    ].join("\n");
    window.open(whatsappWithText(text), "_blank", "noopener");
  };

  return (
    <Section id="contato">
      <Container>
        <Reveal>
          <Panel>
            <Intro>
              <Eyebrow>Vamos trabalhar juntos</Eyebrow>
              <h2>
                Tem um projeto em mente? <GradientText>Vamos tirá-lo do papel.</GradientText>
              </h2>
              <p>
                Conte um pouco sobre sua ideia e eu retorno com uma proposta. Respondo
                normalmente no mesmo dia.
              </p>

              <Channels>
                <Channel href={LINKS.whatsapp} target="_blank" rel="noreferrer">
                  <div className="icon"><FaWhatsapp /></div>
                  <div>
                    <small>WhatsApp</small>
                    <span>+55 (11) 96619-7683</span>
                  </div>
                </Channel>
                <Channel href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  <div className="icon"><FaLinkedinIn /></div>
                  <div>
                    <small>LinkedIn</small>
                    <span>in/caio-lopes-programador</span>
                  </div>
                </Channel>
                <Channel href={LINKS.github} target="_blank" rel="noreferrer">
                  <div className="icon"><FaGithub /></div>
                  <div>
                    <small>GitHub</small>
                    <span>github.com/caamag</span>
                  </div>
                </Channel>
              </Channels>
            </Intro>

            <Form onSubmit={onSubmit}>
              <label>
                Seu nome
                <input required value={form.name} onChange={update("name")} placeholder="Como posso te chamar?" />
              </label>
              <label>
                Empresa
                <input value={form.company} onChange={update("company")} placeholder="Opcional" />
              </label>
              <label className="full">
                Tipo de projeto
                <select value={form.type} onChange={update("type")}>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="full">
                Sobre o projeto
                <textarea
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Descreva sua ideia, objetivos e prazo desejado..."
                />
              </label>
              <Submit type="submit">
                Enviar mensagem <FiSend />
              </Submit>
              <Note>Sua mensagem será aberta no WhatsApp, pronta para enviar.</Note>
            </Form>
          </Panel>
        </Reveal>
      </Container>
    </Section>
  );
};

export default Contact;
