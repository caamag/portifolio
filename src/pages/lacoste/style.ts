import styled from "styled-components";
import { Colors } from "../../global/colors";

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  height: 100vh;
`;

export const ProjectHeader = styled.div`
  width: 70%;
  height: 80px;
  margin: 0 auto;
  padding: 130px 0px 20px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 80px;
      height: auto;
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    padding: 130px 0px 0px 0px;
  }
`;

export const ImagesContainer = styled.div`
  width: 70%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const MainBanner = styled.img`
  width: auto;
  height: 350px;
`;

export const MobileImg = styled.img`
  height: 420px;
  width: auto;
`;

export const Description = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  p {
    font-size: 1.4rem;
    font-weight: 200;
    letter-spacing: 1px;
    color: ${Colors.white};
    text-indent: 10px;
    text-align: justify;
  }

  ul {
    margin-left: 20px;

    li {
      font-size: 1.4rem;
      font-weight: 200;
      letter-spacing: 1px;
      color: ${Colors.white};
    }
  }
`;
