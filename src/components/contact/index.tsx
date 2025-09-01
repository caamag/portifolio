import * as _ from "./style";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Contacts = () => {
  const location = useLocation();

  return (
    <_.Contacts isHome={location.pathname === "/"}>
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
  );
};

export default Contacts;
