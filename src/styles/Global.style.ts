import { createGlobalStyle } from "styled-components";
import bg from '../assets/images/background/bgImage.png'


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: normal;
        font-style: normal;
        line-height: 1.2;
        position: relative;
        background-color: #090F1D;
    }


     body::before {
         content: ""; 
         position: absolute; 
         background-image: url(${bg});
         background-size: cover; 
         background-position: center;
         background-repeat: no-repeat;
         inset: 0;
         z-index: -1; 
         mix-blend-mode: color-burn;
     }


    ul {
        list-style: none;
    }

    button, a {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: white;
    }

    p,
    h3,
    h2,
    h1,
    span {
        color: white;
    }

    section,
    footer {
        padding: 92px 0;
    }
`

