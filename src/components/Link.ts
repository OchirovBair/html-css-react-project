import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    position: relative;
    white-space: nowrap;
    
    &::before {
        content: '';
        width: 100%;
        bottom: 0;
        display: inline-block;
        position: absolute;
        background-color: ${theme.color.accent};
    }
    
    &:hover {
        &::before {
            height: 1px;
        }
    }
`