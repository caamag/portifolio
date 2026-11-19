import styled from "styled-components";
import { FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { theme } from "../../global/theme";
import { Container } from "../../global/styles";
import { LINKS } from "../../data/content";
import { NAV_ITEMS } from "../Header";
import Logo from "../../assets/logo.png";

const Wrapper = styled.footer`
  border-top: 1px solid ${theme.border};
  padding: 36px 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;

  img {
    width: 30px;
    height: 30px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 22px;

  a {
    font-size: 14px;
    color: ${theme.muted};
    transition: color 150ms;
    &:hover {
      color: ${theme.text};
    }
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 10px;
`;

const IconLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${theme.border};
  display: grid;
  place-items: center;
  color: ${theme.muted};
  transition: all 150ms;

  &:hover {
    color: ${theme.accent};
    border-color: ${theme.accent};
  }
`;

const Copy = styled.p`
  margin-top: 28px;
  font-size: 13px;
  color: ${theme.subtle};
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <Row>
        <Brand href="#inicio">
          <img src={Logo} alt="" />
          Caio Lopes
        </Brand>
        <Nav aria-label="Rodapé">
          {NAV_ITEMS.map((i) => (
            <a key={i.id} href={`#${i.id}`}>
              {i.label}
            </a>
          ))}
        </Nav>
        <Socials>
          <IconLink href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </IconLink>
          <IconLink href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </IconLink>
          <IconLink href={LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </IconLink>
          <IconLink href="#inicio" aria-label="Voltar ao topo">
            <FiArrowUp />
          </IconLink>
        </Socials>
      </Row>
      <Copy>© {new Date().getFullYear()} Caio Lopes. Todos os direitos reservados.</Copy>
    </Container>
  </Wrapper>
);

export default Footer;
