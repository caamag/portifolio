import * as _ from "./style";
import MainBanner from "./assets/img-1-lacoste.png";
import MobileImage from "./assets/img-lacoste-mobile.png";
import Lacoste from "../../assets/lacoste-logo.png";
import { useNavigate } from "react-router-dom";

//components
import { Button } from "../../components/UI/button";

const LacostPage = () => {
  const navigate = useNavigate();

  const goToProject = () => {
    window.open("https://lacostebrazil.zendesk.com/hc/pt-br");
  };

  const backPage = () => {
    navigate("/projects");
  };

  return (
    <_.Container>
      <_.ProjectHeader>
        <div>
          <img src={Lacoste} alt="lacoste icon" />
          <h2>Central de ajuda Lacoste</h2>
        </div>
        <div>
          <Button onClick={goToProject}>Visualizar</Button>
          <Button onClick={backPage}>Voltar</Button>
        </div>
      </_.ProjectHeader>

      <_.Description>
        <p>
          O projeto consiste na criação de uma central de ajuda totalmente
          personalizada dentro do Zendesk Guide para a Lacoste, com foco em
          organização eficiente do conteúdo, usabilidade e manutenção
          simplificada. A central permite que os usuários acessem artigos,
          realizem pesquisas e abram chamados de forma intuitiva, aproveitando
          ao máximo os recursos nativos da plataforma, ao mesmo tempo em que a
          interface reflete a identidade visual da marca.
        </p>
        <br />
        <p>As principais funcionalidades implementadas incluem:</p>
        <br />
        <ul>
          <li>Organização de artigos em categorias e seções</li>
          <li>Campo de busca nativo para pesquisa de conteúdo</li>
          <li>Formulário para abertura de chamados</li>
          <li>Layout responsivo para dispositivos móveis</li>
          <li>Adaptação visual baseada na identidade da marca</li>
        </ul>
        <br />
        <p>
          O uso de Handlebars foi essencial para estruturar os templates e
          reaproveitar componentes da interface. O CSS foi customizado para
          garantir a consistência visual com o restante dos canais da Lacoste, e
          o JavaScript foi utilizado para aplicar comportamentos adicionais e
          ajustes de usabilidade fora das opções padrão do Guide. Lembrando que
          a central foi implementada diretamente no ambiente de produção da
          Zendesk, com todos os recursos padrão habilitados, seguindo as boas
          práticas de desenvolvimento front-end para sistemas de help center.
        </p>
      </_.Description>

      <_.ImagesContainer>
        <a
          href="https://drive.google.com/file/d/1KO_CoBoFNJU5y_XZaXZqS5oxHxGgWWFu/view?usp=sharing"
          target="blank"
        >
          <_.MainBanner src={MainBanner} />
        </a>
        <a
          href="https://drive.google.com/file/d/1wA5UEjE_SSQXPAGZ9bXL_zewPZj4waV0/view?usp=sharing"
          target="blank"
        >
          <_.MobileImg src={MobileImage} />
        </a>
      </_.ImagesContainer>
    </_.Container>
  );
};

export default LacostPage;
