import styled, { keyframes } from "styled-components";
import { Colors } from "../../global/colors";

const fadeInText = keyframes`
  0% {
    opacity: 0;
    margin-left: -50px;
  }

  100% {
    opacity: 1;
    margin-left: 0px;
  }
`;

const fadeInLine = keyframes`
  0% {
    opacity: 0;
    margin-right: -50px;
  }

  100% {
    opacity: 1;
    margin-right: 0px;
  }
`;

export const HomeContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  max-width: 1600px;
  margin: 0 auto;
  height: 100vh;
`;

export const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 300px;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: ${Colors.gray};
    font-weight: 200;
    letter-spacing: 3px;
    font-size: 18px;
    animation: ${fadeInText} 500ms ease-in-out;

    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }
`;

export const Line = styled.div`
  width: 80%;
  height: 5px;
  background-color: ${Colors.brown};
  animation: ${fadeInLine} 800ms ease-in-out;

  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;

export const Name = styled.h1`
  font-size: 16rem;
  letter-spacing: 20px;
  color: ${Colors.white};
  animation: ${fadeInText} 800ms ease-in-out;

  @media screen and (max-width: 500px) {
    font-size: 10rem;
    letter-spacing: 12px;
  }
`;
export const Description = styled.h3`
  font-size: 22px;
  text-align: end;
  font-weight: 200;
  color: ${Colors.brown};
  margin-top: -40px;
  letter-spacing: 3px;
  animation: ${fadeInLine} 800ms ease-in-out;

  @media screen and (max-width: 500px) {
    font-size: 16px;
    margin-top: -10px;
    text-align: left;
  }
`;
