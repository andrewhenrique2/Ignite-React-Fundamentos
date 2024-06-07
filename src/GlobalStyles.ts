import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


:root {
    --red-500: #F75A68; 
    --white: #fff;
    --gray-100: #e1e1e6;
    --gray-300: #c4c4cc;
    --gray-400: #8d8d99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;
  
    --green-300: #00B37E;
    --green-500: #00875f;
  }

  :focus {
    outline: transparent;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    background: var(--gray-900);
    color: var(--gray-300);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  `;
  
  export default GlobalStyles;