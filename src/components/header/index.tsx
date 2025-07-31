import * as _ from "./style";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <_.Header>
      <NavLink to={"/"}>
        <img src={Logo} />
      </NavLink>

      <_.HeaderList>
        <li>
          <NavLink to={"/"}>Início</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>Sobre</NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>Projetos</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contato</NavLink>
        </li>
      </_.HeaderList>
    </_.Header>
  );
};

export default Header;
