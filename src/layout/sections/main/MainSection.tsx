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

`


const MainGridWrapper = styled.div`
    display: grid;
    //grid-template-columns: minmax(200px, 544px) minmax(200px, 515px);
    grid-template-columns: auto auto;
    //grid-template-rows: minmax(371px, 432px) minmax(87px, 92px);
    grid-template-rows: auto auto;
    grid-column-gap: 231px;
    grid-row-gap: 72px;

    div:nth-child(2) {
        grid-area: 1/2/3/3;
    }
`