import * as _ from "./style";
import Philco from "../../assets/philco.png";
import Havaianas from "../../assets/havaianas.png";
import Buki from "../../assets/Buki-logo.png";
import Kanban from "../../assets/Kanban-logo.png";
import Message from "../../assets/conciex-messaging.png";

//icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiZendesk } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const ProjectsPage = () => {
  return (
    <_.ProjectsContainer>
      <_.Content>
        <a
          href="https://conciex.com/produtos/conciex-messaging"
          className="card-link"
        >
          <_.Card>
            <_.ConciexLogo src={Message} alt="" />
            <h4>Plataforma de mensageria</h4>
            <p>
              Envio em massa, automações e mensagens individuais via WhatsApp,
              SMS e e-mail, com histórico, controle e métricas dentro do
              Zendesk.
            </p>
            <_.IconsContainer>
              <RiReactjsFill />
              <SiTypescript />
              <SiZendesk />
            </_.IconsContainer>
          </_.Card>
        </a>
        <a
          href="https://conciex.com/produtos/conciex-kanban"
          target="blank"
          className="card-link"
        >
          <_.Card>
            <_.ConciexLogo src={Kanban} alt="" />
            <h4>Gestão de tarefas</h4>
            <p>
              Plataforma integrada com Zendesk para supervisor de operações
              gerirem as tarefas do time de suporte / atendimento.
            </p>
            <_.IconsContainer>
              <RiReactjsFill />
              <SiTypescript />
              <SiZendesk />
              <RiTailwindCssFill />
            </_.IconsContainer>
          </_.Card>
        </a>
        <a
          href="https://havaianas-help.zendesk.com/hc/pt-br"
          target="blank"
          className="card-link"
        >
          <_.Card>
            <_.ProjectLogo src={Havaianas} alt="" />
            <h4>Central de ajuda Havaianas</h4>
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
        <a
          href="https://github.com/caamag/Buki"
          target="blank"
          className="card-link"
        >
          <_.Card>
            <_.ProjectLogo src={Buki} alt="" />
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
      </_.Content>
    </_.ProjectsContainer>
  );
};

export default ProjectsPage;
