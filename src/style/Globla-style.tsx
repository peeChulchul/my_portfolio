import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *{
        scroll-behavior: smooth;
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
    };

    body{
        overflow-x: hidden;
    }

::-webkit-scrollbar{
    width: 10px;
    background-color: #131c31;

}
::-webkit-scrollbar-thumb{
        background-color:#7eadfc;
        border-radius: 10px;
}
`;

export default GlobalStyle;
