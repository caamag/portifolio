import styled from "styled-components";
import { Colors } from "../../global/colors";

export const Button = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  background: none;

  border: 1px solid ${Colors.brown};
  color: ${Colors.brown};
  transition: 150ms;

  &:hover {
    background: ${Colors.brown};
    color: ${Colors.white};
  }
`;
