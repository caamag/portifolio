import * as _ from "./style";

//icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const HomePage = () => {
  return (
    <_.HomeContainer>
      <_.Content>
        <_.Title>
          <h3>OLÁ ME CHAMO</h3>
          <_.Line />
        </_.Title>
        <_.Name>CAIO</_.Name>
        <_.Description>
          UM DESENVOLVEDOR <br /> FRONTEND
        </_.Description>

        <_.Contacts>
          <a href="https://github.com/caamag">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/caio-lopes-programador/">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/5511966197683">
            <IoLogoWhatsapp />
          </a>
        </_.Contacts>
      </_.Content>
    </_.HomeContainer>
  );
};

export default HomePage;
