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

  img {
    width: auto;
    height: 30px;
    margin-right: 20px;
  }
`;

export const Description = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;

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

export const BannerContainer = styled.div`
  margin: 15px 0px;
  text-align: center;
`;

export const Demontration = styled.img`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2px;
`;
