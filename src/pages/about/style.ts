import styled from "styled-components";
import { Colors } from "../../global/colors";

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  height: 100vh;
`;

export const AboutContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 130px;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Profile = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    box-shadow: 1px 1px 20px ${Colors.darkGray};
    border-radius: 100%;

    @media screen and (max-width: 800px) {
      width: 180px;
      height: 180px;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

export const AboutText = styled.div`
  width: 70%;
  padding: 0px 20px;

  p {
    color: ${Colors.white};
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: 200;
    text-indent: 15px;
    margin-bottom: 10px;

    @media screen and (max-width: 800px) {
      font-size: 14px;
      text-align: justify;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

export const Skills = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  color: ${Colors.brown};

  svg {
    width: 40px;
    height: auto;
    margin-right: 10px;

    @media screen and (max-width: 600px) {
      height: 50px;
      width: auto;
    }
  }
`;
