import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme.colors.mediumGray};
    box-sizing: border-box;
    outline: none;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.font.montserrat};
    min-height: 100vh;
    overflow-x: hidden;

    li {
      list-style-type: none;
    }

    a {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
    }

    button, input, select {
      font-family: ${({ theme }) => theme.montserrat};
      outline: none;
    }
    
    select {
      cursor: pointer;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.mediumGray};
    padding: .625rem;
    border-radius: .625rem;
    transition: all .3s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.mediumGray};
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.transparentBlack};
    border-radius: .625rem;
  }

  ::-moz-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.black};
    width: .5rem;
  }
`;

export default GlobalStyles;