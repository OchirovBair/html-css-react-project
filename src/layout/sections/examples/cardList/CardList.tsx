import React from 'react';
import styled from "styled-components";
import {Card} from "./card/Card";
import {data} from '../../../../data/data';
import 'react-alice-carousel/lib/alice-carousel.css';
import {theme} from "../../../../styles/Theme";


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
    grid-area: 2/1/3/3;
    gap: 16px;
    //justify-content: space-between;
    //overflow-x: auto;
    //white-space: nowrap;
    @media screen and ${theme.media.smallDesktop} {
        grid-area: 2/1/3/2;
        flex-direction: column;
        align-items: center;
    }
`
