import styled, { keyframes } from "styled-components";
import { Colors } from "../../global/colors";

const fadeInIcon = keyframes`
  0% {
    opacity: 0;
    margin-left: -50px;
  }

  100% {
    opacity: 1;
    margin-left: 0px;
  }
`;

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
    animation: ${fadeInIcon} 800ms ease-in-out;
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
