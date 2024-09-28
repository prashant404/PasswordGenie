import { createGlobalStyle } from 'styled-components';
import Colors from './helpers/Colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  body {
    margin: 0; /* Remove default margin */
    background-color: ${Colors.primary}; /* Keep primary color */
    font-family: 'Roboto', sans-serif; /* Updated font family */
    color: #141c3a; /* Text color */
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ensure body takes full height */
    overflow-x: hidden; /* Prevent horizontal scrolling */
    padding: 20px; /* Add some padding */
    box-sizing: border-box; /* Include padding in height/width calculations */
  }

  h1 {
    font-size: 2rem; /* Increased size for better visibility */
    font-weight: 700; /* Bold font weight */
    margin: 10px 0; /* Add vertical spacing */
  }

  h2 {
    font-size: 1.5rem; /* Adjusted size */
    font-weight: 500; /* Semi-bold font weight */
    margin: 8px 0; /* Add vertical spacing */
  }

  h3 {
    font-size: 1.25rem; /* Adjusted size */
    font-weight: 400; /* Normal font weight */
    margin: 6px 0; /* Add vertical spacing */
  }

  p {
    font-size: 1rem; /* Set to 1rem for consistency */
    font-weight: 400; /* Normal font weight */
    letter-spacing: 0.5px; /* Slightly increased letter spacing */
    line-height: 1.5; /* Improved line height for readability */
    margin: 5px 0; /* Add vertical spacing */
  }

  a {
    color: ${Colors.default}; /* Link color */
    text-decoration: none; /* Remove underline */
    transition: color 0.3s ease; /* Smooth color transition */
    
    &:hover {
      color: ${Colors.hover}; /* Change color on hover */
      text-decoration: underline; /* Add underline on hover for emphasis */
    }
  }
`;

export default GlobalStyle;
