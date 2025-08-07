import * as _ from "./style";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/button";
import Conciex from "../../assets/Conciex-Logo.png";

const ConciexPage = () => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate("/projects");
  };

  return (
    <_.Container>
      <_.ProjectHeader>
        <img src={Conciex} alt="lacoste icon" />
        <Button onClick={backPage}>Voltar</Button>
      </_.ProjectHeader>

      <_.Description>
        <p>
          O Conciex é um aplicativo customizado para o ambiente Zendesk Support,
          desenvolvido para facilitar a gestão de templates de pesquisas de
          satisfação (ex: CSAT, NPS). A aplicação foi implementada como um
          Zendesk App (navbar), acessível diretamente pela interface do agente.
        </p>
        <br />
        <p>As principais funcionalidades incluem:</p>
        <br />
        <ul>
          <li>
            Criação, edição, exclusão e visualização de templates de pesquisa
          </li>
          <li>
            Integração direta com a Central de Ajuda (Zendesk Guide), permitindo
            exibição dinâmica do template ao final de um atendimento
          </li>
          <li>
            Armazenamento e atualização automática dos resultados dentro da
            Zendesk
          </li>
          <li>
            Geração de relatórios em tempo real, baseados nas respostas
            recebidas
          </li>
          <li>Interface amigável e focada em eficiência operacional</li>
        </ul>
        <br />
        <p>
          A aplicação utiliza a Zendesk Apps Framework (ZAF) para integração com
          os dados da plataforma e atualiza as informações em tempo real com
          base nas interações do usuário. Os relatórios internos permitem
          acompanhamento contínuo da performance das pesquisas, sem depender de
          ferramentas externas. Este projeto foi desenvolvido com foco em
          escalabilidade e integração nativa, permitindo que equipes de suporte
          personalizem a experiência de avaliação de atendimento de forma
          simples e funcional.
        </p>
      </_.Description>
    </_.Container>
  );
};

export default ConciexPage;
