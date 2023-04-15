import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

::-webkit-scrollbar{
    width: 0.3rem;
    height: .3rem;
    background-color: #f0f0f0;
}

::-webkit-scrollbar-thumb{
    background-color: rgb(0,0,50);
    border-radius: 20px;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #fdfdfd;
    }
`;
export default GlobalStyles;
