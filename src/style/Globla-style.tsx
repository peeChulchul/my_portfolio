import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *{
        overflow-x: hidden;
        scroll-behavior: smooth;
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
    };

`;

export default GlobalStyle;
