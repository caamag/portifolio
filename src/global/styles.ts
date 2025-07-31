import { createGlobalStyle } from "styled-components";

export const GobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        border: 0px;
    }

    html {
        scroll-behavior: smooth;
    }

    body {}

    button {
        cursor: pointer;
    }
`;
