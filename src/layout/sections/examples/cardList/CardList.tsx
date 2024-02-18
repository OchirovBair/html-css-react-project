import React from 'react';
import styled from "styled-components";
import {Card} from "./card/Card";
import {data} from '../../../../data/data';


export const CardList = () => {
    return (
        <StyledExamplesList>
            <Card data={data.weekUniqueArt.card1}/>
            <Card data={data.weekUniqueArt.card2}/>
            <Card data={data.weekUniqueArt.card3}/>
        </StyledExamplesList>
    );
};

const StyledExamplesList = styled.div`
    display: flex;
    gap: 30px;
    grid-area: 2/1/3/3;
    justify-self: center;
    align-self: center;
`