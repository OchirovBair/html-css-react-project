import styled from "styled-components";
import {theme} from "../styles/Theme";

type ButtonPropsType ={
    $bg_color?: string,
    $border?: string,
    $font_color?: string,
}

export const Button = styled.button<ButtonPropsType>`
    padding: 12px 40px;
    //width: min-content;
    //height: min-content;
    //white-space: nowrap;
    
    background-color: ${props => props.$bg_color || theme.color.accent};
    border-radius: 8px;
    border: ${props => props.$border || 'none'};

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