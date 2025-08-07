import styled, { keyframes } from "styled-components";

const spinAndScale = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  70% {
    transform: scale(1.3) rotate(360deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
    height: auto;
    animation: ${spinAndScale} 1.2s linear infinite;
  }
`;
