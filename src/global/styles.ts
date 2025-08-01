import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

export const GobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        border: 0px;
    }

    html {
        scroll-behavior: smooth;
        font-family: "Bebas Neue", sans-serif;
        font-weight: 200;
        font-style: normal;
        font-size: 62.5%;
    }

    body {
        background-color: ${Colors.black};
    }

    button {
        cursor: pointer;
    }
`;
