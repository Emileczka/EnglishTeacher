import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html{
    margin: 0;
    font-size: 62,5%;
    height: 100vh;
    position:relative;
}

body{
    font-family: "Big Shoulders Display";
    margin: 0;
    height: 100vh; 
    padding:0;
    /* background: rgb(181,181,255); 
    background: linear-gradient(61deg, rgba(181,181,255,1) 0%, rgba(191,252,198,1) 100%); */
    font-size: 1.6rem;
}`;

export default GlobalStyle;
