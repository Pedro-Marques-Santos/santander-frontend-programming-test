import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black-800: #202024;
    --black-900: #121214;
    --gray-400: #C2C2C2;
    --gray-600: #7C7C8A;
    --green-600: #00B37E;
    --green-650: #019368;
    --white: #FFFFFF;
    --blue-700: #4A3AFF;
    --pink-500: #9328FF;
    --pink-600: #6408c1;
    --red-400: #F75A68;
    --red-450: #f34c5a;
  } 
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
  input {
    outline: none;
    border: none;
  }
  body {
    background: var(--black-800);
    color: var(--gray-400);
    font-family: 'Poppins', sans-serif;
  }
`;
