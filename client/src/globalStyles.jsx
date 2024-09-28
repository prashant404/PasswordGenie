import { createGlobalStyle } from 'styled-components';
import Colors from './helpers/Colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  body {
    margin: 0; 
    background-color: ${Colors.primary};
    font-family: 'Roboto', sans-serif; 
    color: #141c3a;
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    overflow-x: hidden; 
    padding: 20px;
    box-sizing: border-box; 
  }

  h1 {
    font-size: 2rem; 
    font-weight: 700; 
    margin: 10px 0; 
  }

  h2 {
    font-size: 1.5rem; 
    font-weight: 500; 
    margin: 8px 0; 
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 400; 
    margin: 6px 0; 
  }

  p {
    font-size: 1rem;
    font-weight: 400; 
    letter-spacing: 0.5px; 
    line-height: 1.5; 
    margin: 5px 0; 
  }

  a {
    color: ${Colors.default};
    text-decoration: none; 
    transition: color 0.3s ease; 
    
    &:hover {
      color: ${Colors.hover}; 
      text-decoration: underline; 
    }
  }
`;

export default GlobalStyle;
