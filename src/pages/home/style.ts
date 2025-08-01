import styled from "styled-components";
import { Colors } from "../../global/colors";

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
  }
`;

export const Line = styled.div`
  width: 80%;
  height: 5px;
  background-color: ${Colors.brown};
`;

export const Name = styled.h1`
  font-size: 16rem;
  letter-spacing: 20px;
  color: ${Colors.white};
`;
export const Description = styled.h3`
  font-size: 22px;
  text-align: end;
  font-weight: 200;
  color: ${Colors.brown};
  margin-top: -40px;
  letter-spacing: 3px;
`;

export const Contacts = styled.div`
  position: absolute;
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
`;
