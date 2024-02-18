import { createGlobalStyle } from "styled-components";
import bg from '../assets/images/background/bgImage.png'


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Canela';
        src: local('Canela'),
        url(../assets/fonts/Canela-Medium.eot) format('eot'),
        url(../assets/fonts/Canela-Medium.woff2) format('woff2'),
        url(../assets/fonts/Canela-Medium.ttf) format('truetype');
        font-weight: 500; //medium
        font-style: normal;
    }

    @font-face {
        font-family: 'Source Sans Pro';
        src: local('Source Sans Pro'),
        url(../assets/fonts/SourceSansPro-Bold.eot) format('eot'),
        url(../assets/fonts/SourceSansPro-Bold.woff2) format('woff2'),
        url(../assets/fonts/source-sans-pro.bold.ttf) format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: normal;
        font-style: normal;
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
`


// 1) пятнам задать чере before и спозиционировать оносительно секции и наложить color-burn
// 2) поробовать надпись по кругу сделать через after и также спозиционировать
// 3)