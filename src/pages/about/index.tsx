import * as _ from "./style";
import { Button } from "../../components/UI/button";

//icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";

const AboutPage = () => {
  const goToEmail = () => {
    window.open("https://mailto:caiolopesfv@gmail.com");
  };

  return (
    <_.AboutContainer>
      <_.AboutContent>
        <_.Profile>
          <img
            src="https://avatars.githubusercontent.com/u/105686148?v=4"
            alt="profile"
          />
          <_.BtnContainer>
            <Button>Currículo</Button>
            <Button onClick={goToEmail}>E-mail</Button>
          </_.BtnContainer>
        </_.Profile>
        <_.AboutText>
          <p>
            Iniciei minha jornada em 2023 atuando como desenvolvedor Front End e
            consultor Zendesk, unindo a implementação de soluções personalizadas
            na plataforma — como automações, gatilhos e configurações nativas —
            ao desenvolvimento de interfaces com React. Com o tempo, passei a me
            dedicar predominantemente ao desenvolvimento, ampliando meus
            conhecimentos e práticas com React e React Native (utilizando Expo
            como principal ferramenta).
          </p>

          <p>
            Atualmente, trabalho na BCR.CX, onde sou responsável pelo
            desenvolvimento Front End de diversos projetos, com foco especial em
            aplicações criadas para rodar dentro da Zendesk — os chamados
            Zendesk Apps. Além disso, colaboro ativamente na integração dessas
            soluções com APIs e fluxos personalizados de atendimento, visando
            oferecer uma experiência mais eficiente e conectada para os usuários
            finais.
          </p>

          <_.Skills>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <SiTypescript />
            <FaReact />
            <SiFirebase />
            <FaNodeJs />
            <FaGitSquare />
          </_.Skills>
        </_.AboutText>
      </_.AboutContent>
    </_.AboutContainer>
  );
};

export default AboutPage;
