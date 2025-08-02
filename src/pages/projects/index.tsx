import * as _ from "./style";
import Lacoste from "../../assets/lacoste-logo.png";
import Roca from "../../assets/roca-logo.png";
import Conciex from "../../assets/Conciex-Logo.png";
import Bleepy from "../../assets/bleepy-icon.png";

//icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiZendesk } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { SiFirebase } from "react-icons/si";
import { LuShoppingBag } from "react-icons/lu";

const ProjectsPage = () => {
  return (
    <_.ProjectsContainer>
      <_.Content>
        <_.Card>
          <_.ProjectLogo src={Lacoste} alt="" />
          <h4>Central de ajuda Lacoste</h4>
          <p>
            Criação de Help Center com Zendesk Guide, focado em autoatendimento
            e abertura de chamados.
          </p>
          <_.IconsContainer>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <SiZendesk />
          </_.IconsContainer>
        </_.Card>
        <_.Card>
          <_.ProjectLogo src={Roca} alt="" />
          <h4>Portal de gestão de chamados</h4>
          <p>
            Desenvolvimento de portal interno para gestão de chamados, com foco
            em usabilidade e eficiência no atendimento.
          </p>
          <_.IconsContainer>
            <RiReactjsFill />
            <FaCss3Alt />
            <SiTypescript />
            <SiZendesk />
          </_.IconsContainer>
        </_.Card>
        <_.Card>
          <_.ConciexLogo src={Conciex} alt="" />
          <h4>Pesquisas de CSAT/NPS</h4>
          <p>
            Plataforma integrada com Zendesk para criar, editar, visualizar e
            excluir templates de pesquisa de satisfação + criação de relatórios.
          </p>
          <_.IconsContainer>
            <RiReactjsFill />
            <FaCss3Alt />
            <SiTypescript />
            <SiZendesk />
          </_.IconsContainer>
        </_.Card>
        <_.Card>
          <FaGithub />
          <h4>Relatório Github</h4>
          <p>
            Relatório interativo que exibe dados da conta GitHub do usuário
            inserido, com visualização dinâmica via dashboard.
          </p>
          <_.IconsContainer>
            <RiReactjsFill />
            <FaCss3Alt />
            <SiTypescript />
          </_.IconsContainer>
        </_.Card>
        <_.Card>
          <_.ProjectLogo src={Bleepy} />
          <h4>Bleepy</h4>
          <p>
            Agente de IA Mobile integrado com DeepSeek para criar um chat de
            conversa em tempo real.
          </p>
          <_.IconsContainer>
            <RiReactjsFill />
            <SiFirebase />
            <SiTypescript />
          </_.IconsContainer>
        </_.Card>
        <_.Card>
          <LuShoppingBag />
          <h4>E-commerce</h4>
          <p>
            Loja virtual desenvolvida do zero, com foco em catálogo de produtos,
            carrinho e fluxo de compra.
          </p>
          <_.IconsContainer>
            <RiReactjsFill />
            <SiFirebase />
            <SiTypescript />
          </_.IconsContainer>
        </_.Card>
      </_.Content>
    </_.ProjectsContainer>
  );
};

export default ProjectsPage;
