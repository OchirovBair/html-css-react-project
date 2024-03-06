import React from 'react';
import {Icon} from "../../../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../../../components/FlewWrapper";
import styled from "styled-components";
import {iconData} from "../../../../../../data/iconData";

type CardInformationPropsType = {
    time: string
}

export const CardInformation = (props: CardInformationPropsType) => {
    return (
        <StyledCardInformation>
            <span>Ending In</span>
            <FlexWrapper $align='center' $justify='flex-start' $gap='12px'>
                <Icon mainIconState={iconData.clock}/>
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
