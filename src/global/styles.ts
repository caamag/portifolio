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
        font-weight: 400;
        font-style: normal;
    }

    body {
        background-color: ${Colors.black};
    }

    button {
        cursor: pointer;
    }
`;
