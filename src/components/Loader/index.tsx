import * as _ from "./style";
import Logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <_.LoaderContainer>
      <img src={Logo} alt="" />
    </_.LoaderContainer>
  );
};

export default Loader;
