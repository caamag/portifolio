import styled from "styled-components";
import { Colors } from "../../global/colors";

export const Header = styled.header`
  position: fixed;
  width: 100vw;
  max-width: 1600px;
  margin: 0 auto;
  height: 100px;
  background-color: ${Colors.black};

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;

  img {
    width: 60px;
    transition: 150ms;
    height: auto;
    margin-left: 30px;
    transform: scale(0.9);
    opacity: 0.7;

    &:hover {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  margin-right: 40px;

  li {
    list-style: none;
    margin: 0px 15px;
    letter-spacing: 3px;
  }

  a {
    font-size: 16px;
    color: ${Colors.gray};
    text-decoration: none;
    padding-bottom: 5px;
    transition: 150ms;

    &:hover {
      border-bottom: 1px solid ${Colors.white};
      color: ${Colors.white};
    }
  }

  .active {
    border-bottom: 1px solid ${Colors.white};
    color: ${Colors.white};
    transform: scale(1);
  }
`;
