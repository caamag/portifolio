import styled from "styled-components";
import { Colors } from "../../global/colors";

export const Contacts = styled.div<{ isHome: boolean }>`
  position: fixed;
  z-index: 5;
  width: 40px;
  height: 150px;

  left: 40px;
  bottom: 50px;

  svg {
    font-size: 30px;
    color: ${Colors.gray};
    transform: scale(0.9);
    margin: 10px 0px;
    transition: 150ms;

    &:hover {
      color: ${Colors.white};
      transform: scale(1);
    }
  }

  @media screen and (max-width: 600px) {
    display: ${(p) => (p.isHome ? "" : "none")};
    left: 10px;
  }
`;
