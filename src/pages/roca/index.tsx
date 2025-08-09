import * as _ from "./style";
import Roca from "../../assets/roca-logo.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/button";

import Banner from "./assets/roca-img-1.png";
import Mobile from "./assets/roca-img-2.png";

const RocaPage = () => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate("/projects");
  };

  return (
    <_.Container>
      <_.ProjectHeader>
        <div>
          <img src={Roca} alt="Roca icon" />
        </div>

        <Button onClick={backPage}>voltar</Button>
      </_.ProjectHeader>

      <_.Description>
        <p>
          Portal web desenvolvido para uso de postos técnicos autorizados da
          Roca, com o objetivo de centralizar e otimizar a gestão de chamados e
          serviços executados pelos profissionais. A aplicação é independente,
          mas integra dados provenientes de tickets da Zendesk, garantindo uma
          visão unificada das informações.
        </p>
        <br />

        <p>Principais funcionalidades:</p>
        <br />
        <ul>
          <li>Listagem e gerenciamento de ordens de serviço</li>
          <li>Busca de produtos no catálogo técnico</li>
          <li>Registro e acompanhamento de pedidos</li>
          <li>Publicação e consulta de comunicados internos</li>
          <li>Emissão de relatórios operacionais</li>
          <li>Sistema de autenticação e controle de acesso via Keycloak</li>
        </ul>
        <br />

        <p>
          O projeto foi desenvolvido como um site apartado do Zendesk, mas com
          consumo de dados via API para sincronizar informações de chamados. A
          arquitetura garante segurança no acesso, integridade dos dados e boa
          performance para múltiplos usuários simultâneos.
        </p>
      </_.Description>

      <_.ImagesContainer>
        <a
          href="https://drive.google.com/file/d/1PlO4J9fcorKdoIemX51l8iLJzRSai3vT/view"
          target="blank"
        >
          <_.MainBanner src={Banner} />
        </a>
        <a
          href="https://drive.google.com/file/d/1up75MAPNgRtmVtYRDZP3PXDpMvWW0Y_O/view"
          target="blank"
        >
          <_.MobileImg src={Mobile} />
        </a>
      </_.ImagesContainer>
      <br />
    </_.Container>
  );
};

export default RocaPage;
