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
    height: 100%;
`


const MainGridWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 171px;

    div:nth-child(2) {
        grid-area: 1/2/3/3;
    }
`