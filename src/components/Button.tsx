import styled from "styled-components";
import {theme} from "../styles/Theme";

type ButtonPropsType ={
    $bg_color?: string,
    $outline?: string,
    $font_color?: string,
}

export const Button = styled.button<ButtonPropsType>`
    padding: 12px 40px;
    white-space: nowrap;
    line-height: 1.8;
    
    background-color: ${props => props.$bg_color || theme.color.accent};
    border-radius: 8px;
    outline: ${props => props.$outline || 'none'};

    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.$font_color || theme.color.secondaryFont};

    &:hover {
        transform: scale(1.05);
        
        &:active {
            transform: scale(1);
        }
    }
`