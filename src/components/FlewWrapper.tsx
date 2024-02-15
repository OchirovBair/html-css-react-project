import React from 'react';
import styled from "styled-components";

type FlewWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string
}

export const FlewWrapper = styled.div<FlewWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'flex-start'};
    flex-wrap: ${props => props.wrap || 'wrap'};
`
