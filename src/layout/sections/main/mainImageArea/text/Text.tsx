import styled from "styled-components";
import React from 'react';

type TextPropsType = {
    header: string,
    text: string
}

export const Text = (props: TextPropsType) => {
    return (
        <StyledText>
            <span>{props.header}</span>
            <span>{props.text}</span>
        </StyledText>
    );
};

const StyledText = styled.div`
    display: flex;
    flex-direction: column;
`