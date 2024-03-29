import { createGlobalStyle } from "styled-components";
import bg from '../assets/images/background/bgImage.png'
import {theme} from "./Theme";


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
        font-weight: 400;
        font-style: normal;
        line-height: 1.2;
        position: relative;

        background-color: #090F1D;
        color: ${theme.color.primaryFont};

        min-width: 360px;
    }


    body::before {
        content: "";
        position: absolute;
        background-image: url(${bg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        inset: 0;
        z-index: -999;
        mix-blend-mode: color-burn;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
    }
    
    h2 {
        font-family: Canela, sans-serif;
        font-weight: 500;
    }
    
    ul {
        list-style: none;
    }

    button, a {
        cursor: pointer;
        border: none;
        background-color: unset;
    }

    a {
        text-decoration: none;
        color: white;
    }

    section,
    footer {
        padding: 92px 0;
    }
`

