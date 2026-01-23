import styled, { keyframes } from "styled-components";
import { Colors } from "../../global/colors";

const fadeInCard = keyframes`
  0% {
    opacity: 0;
    margin-bottom: -50px;
  }

  100% {
    opacity: 1;
    margin-bottom: 0px;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100vw;
  max-width: 1600px;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 150px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  a.card-link,
  a.card-link:visited,
  a.card-link:active,
  a.card-link:hover {
    text-decoration: none;
    color: inherit;
    outline: none !important;
  }
`;

export const Card = styled.div`
  width: 280px;
  height: 180px;
  background-color: rgba(46, 48, 53, 1);
  border-radius: 15px;
  padding: 20px 30px;
  transition: 150ms;
  animation: ${fadeInCard} 800ms ease-in-out;

  &:hover {
    transform: scale(1.025);
  }

  h4 {
    color: white;
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 1px;
    margin: 10px 0px;
  }

  svg {
    font-size: 22px;
    color: ${Colors.brown};
    margin-right: 10px;
  }

  p {
    color: ${Colors.white};
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 1px;
  }
`;

export const ProjectLogo = styled.img`
  width: auto;
  height: 30px;
  color: ${Colors.gray};
`;

export const IconsContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const ConciexLogo = styled.img`
  width: auto !important;
  height: 20px !important;
  margin-top: 10px;
`;
