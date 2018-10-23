import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: Lato, Helvetica-Neue, Helvetica, Arial, sans-serif;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.background}
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }
`;

export default globalStyles;
