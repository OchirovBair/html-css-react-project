import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: left;
    font-family: Canela, sans-serif;
    font-size: 48px;
    font-weight: 500;
    
    & > span {
        color: ${theme.color.accent};
    }
`