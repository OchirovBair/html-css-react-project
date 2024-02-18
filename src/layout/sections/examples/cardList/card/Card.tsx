import React from 'react';
import styled from "styled-components";
import {Price} from "./price/Price";
import {CardInformation} from "./cardInformation/CardInformation";
import {Button} from "../../../../../components/Button";
import {FlexWrapper} from "../../../../../components/FlewWrapper";


export const Card = (props: any) => {
    return (
        <StyledCard>
                <img src={props.data.linkImg} alt="card picture"/>
                <ExamplesFlexWrapper align='center' justify='space-between'>
                    <CardTitle>{props.data.artTitle}</CardTitle>
                    <Price price={props.data.priceInEth}/>
                </ExamplesFlexWrapper>
                <FlexWrapper align='center' justify='space-between'>
                    <CardInformation time={props.data.endingTime}/>
                    <Button width='168px' height='48px'>Place A Bid</Button>
                </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
`
const CardTitle = styled.h3`

`

const ExamplesFlexWrapper = styled(FlexWrapper)`
    margin: 24px 0 16px;
`