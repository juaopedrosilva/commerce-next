import  styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle` 
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Saira', sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
` 