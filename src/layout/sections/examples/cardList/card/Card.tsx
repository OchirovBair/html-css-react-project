import React from 'react';
import styled from "styled-components";
import {Price} from "./price/Price";
import {CardInformation} from "./cardInformation/CardInformation";
import {Button} from "../../../../../components/Button";
import {FlexWrapper} from "../../../../../components/FlewWrapper";
import {theme} from "../../../../../styles/Theme";

type CardType = {
    linkImg:string,
    artTitle:string,
    priceInEth:number,
    endingTime:string
}

export const Card = (props: {data:CardType}) => {
    return (
        <StyledCard>
                <CardImg src={props.data.linkImg} alt="card"/>
                <ExamplesFlexWrapper $align='center' $justify='space-between'>
                    <CardTitle>{props.data.artTitle}</CardTitle>
                    <Price price={props.data.priceInEth}/>
                </ExamplesFlexWrapper>
                <FlexWrapper $align='center' $justify='space-between'>
                    <CardInformation time={props.data.endingTime}/>
                    <Button>Place A Bid</Button>
                </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 410px;
    width: 100%;
    padding: 20px;
    border-top: 1px solid ${theme.color.accent};
    border-radius: 28px;
    background-color: ${theme.color.bgColor};
`
const CardTitle = styled.h3`

`

const ExamplesFlexWrapper = styled(FlexWrapper)`
    margin: 24px 0 16px;
`

const CardImg = styled.img`
    width: 100%;
`