import styled from "styled-components";

type ButtonPropsType ={
    width?: string,
    height?: string
}

export const Button = styled.button<ButtonPropsType>`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
`