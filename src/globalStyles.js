import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  #root {
    padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 64px 32px 64px;
  }
    /* max-width: 1440px; */
    /* padding-right: 20px; */
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.primaryBlack};
    background-color:#ffffff;
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: 400;
  }

  ul li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    &:visited {
      text-decoration: none;
    }
  }

  a:hover {
    color: darkorange;
  }

  button {
    cursor: pointer;
  }

  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  nav, footer, header {
    display: block;
  }

  input, button, textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
`;
