import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #app {
    height: 100%;
    max-width: 100%;
  }

  body {
    background: #EEEEEE;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input {
    color: #3E3E3E;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
