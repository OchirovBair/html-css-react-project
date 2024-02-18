import React from 'react';
import {Icon} from "../../../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../../../components/FlewWrapper";
import styled from "styled-components";

type CardInformationPropsType = {
    time: string
}

export const CardInformation = (props: CardInformationPropsType) => {
    return (
        <StyledCardInformation>
            <span>Ending In</span>
            <FlexWrapper align='center' justify='flex-start' gap='12px'>
                <Icon iconId='clock' width='24px' height='24px' viewBox='0 0 24 24'/>
                <span>{props.time}</span>
            </FlexWrapper>
        </StyledCardInformation>
    );
};

const StyledCardInformation = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 4px;
    flex-direction: column;
`
