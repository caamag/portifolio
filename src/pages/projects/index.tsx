import * as _ from "./style";
import { NavLink } from "react-router-dom";

import Lacoste from "../../assets/lacoste-logo.png";
import Roca from "../../assets/roca-logo.png";
import Conciex from "../../assets/Conciex-Logo.png";
import Philco from "../../assets/philco.png";

//icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiZendesk } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { LuShoppingBag } from "react-icons/lu";
import { SiNestjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const ProjectsPage = () => {
  return (
    <_.ProjectsContainer>
      <_.Content>
        <a
          href="https://lacostebrazil.zendesk.com/hc/pt-br"
          target="blank"
          className="card-link"
        >
          <_.Card>
            <_.ProjectLogo src={Lacoste} alt="" />
            <h4>Central de ajuda Lacoste</h4>
            <p>
              Criação de Help Center com Zendesk Guide, focado em
              autoatendimento e abertura de chamados.
            </p>
            <_.IconsContainer>
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
              <SiZendesk />
            </_.IconsContainer>
          </_.Card>
        </a>
        <NavLink to={"/projects/roca"} className="card-link">
          <_.Card>
            <_.ProjectLogo src={Roca} alt="" />
            <h4>Portal de gestão de chamados</h4>
            <p>
              Desenvolvimento de portal interno para gestão de chamados, com
              foco em usabilidade e eficiência no atendimento.
            </p>
            <_.IconsContainer>
              <RiReactjsFill />
              <FaCss3Alt />
              <SiTypescript />
              <SiZendesk />
            </_.IconsContainer>
          </_.Card>
        </NavLink>
        <NavLink to={"/projects/conciex"} className="card-link">
          <_.Card>
            <_.ConciexLogo src={Conciex} alt="" />
            <h4>Pesquisas de CSAT/NPS</h4>
            <p>
              Plataforma integrada com Zendesk para criar, editar, visualizar e
              excluir templates de pesquisa de satisfação + criação de
              relatórios.
            </p>
            <_.IconsContainer>
              <RiReactjsFill />
              <FaCss3Alt />
              <SiTypescript />
              <SiZendesk />
            </_.IconsContainer>
          </_.Card>
        </NavLink>
        <a
          href="https://atendimento-philco.zendesk.com/hc/pt-br"
          target="blank"
          className="card-link"
        >
          <_.Card>
            <_.ProjectLogo
              src={Philco}
              alt=""
              style={{ filter: "invert(100%)" }}
            />
            <h4>Portal consumidor</h4>
            <p>
              Plataforma integrada à Zendesk para tirar dúvidas, consultar
              pedidos e localizar assistência técnica.
            </p>
            <_.IconsContainer>
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
              <SiZendesk />
            </_.IconsContainer>
          </_.Card>
        </a>
        <a
          href="https://github.com/caamag/Buki"
          target="blank"
          className="card-link"
        >
          <_.Card>
            <LuShoppingBag />
            <h4>E-commerce</h4>
            <p>
              Loja virtual desenvolvida do zero, com foco em catálogo de
              produtos, carrinho e fluxo de compra.
            </p>
            <_.IconsContainer>
              <RiReactjsFill />
              <SiTypescript />
              <SiNestjs />
              <FaNodeJs />
              <BiLogoPostgresql />
            </_.IconsContainer>
          </_.Card>
        </a>
      </_.Content>
    </_.ProjectsContainer>
  );
};

export default ProjectsPage;
