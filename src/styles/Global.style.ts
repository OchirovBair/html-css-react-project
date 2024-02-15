import { createGlobalStyle } from "styled-components";
import mainBgImg from '../assets//images/main-bg-image.png'

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
        background-image: url(${mainBgImg});
        background-size: cover;
        //height: 4800px;
    }
`
