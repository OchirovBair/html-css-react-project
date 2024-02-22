import React from 'react';
import styled from "styled-components";
import {StatisticsList} from "./statisticsList/StatisticsList";
import {MainCard} from "./mainImageArea/MainCard";
import {MainInformation} from "./mainInformation/MainInformation";
import {Container} from "../../../components/Container";
import {data} from "../../../data/data";

export const MainSection = () => {
    return (
        <StyledMain>
            <Container>
                <MainGridWrapper>
                    <MainInformation/>
                    <MainCard data={data.mainCardInfo}/>
                    <StatisticsList/>
                </MainGridWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    position: relative;
    
    &::before {
        content: '';
        width: 630px;
        height: 460px;
        filter: blur(400px);
        background: rgb(31, 65, 61);
        position: absolute;
        left: 550px;
        top: 353px;
        z-index: 1;
    }
`


const MainGridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    //grid-template-rows: auto auto;
    align-items: center;
    grid-auto-rows: auto;
    grid-column-gap: 171px;
    grid-row-gap: 72px;

    & > div:nth-child(2) {
        grid-area: 1/2/3/3;
    }

    & > div:nth-child(1) {
        padding-top: 26px;
        align-self: end;
    }
    > div:nth-child(3) {
        padding-bottom: 26px;
        align-self: start;
    }
`