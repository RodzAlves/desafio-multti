import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  @media(max-width: 768px) {
    input, select, textarea {
      font-size: 16px;
    }
  }

  a {
    text-decoration: none;
  }
  
  body {
    background: #ed1450;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
