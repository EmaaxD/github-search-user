import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "./components/App";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }
  body, 
  input, 
  button, 
  textarea, 
  select {
    font-family: 'Space Mono', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
