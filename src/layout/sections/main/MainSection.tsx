import React from 'react';
import styled from "styled-components";
import {StatisticsList} from "./statisticsList/StatisticsList";
import {MainCard} from "./mainImageArea/MainCard";
import {MainInformation} from "./mainInformation/MainInformation";
import {Container} from "../../../components/Container";
import {data} from "../../../data/data";
import {theme} from "../../../styles/Theme";

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
    & > div {
        position: relative;

        &:before {
            content: '';
            width: 630px;
            height: 460px;
            filter: blur(200px);
            background-color: ${theme.color.bgColorBlur};
            position: absolute;
            left: 430px;
            top: 170px;
            z-index: -1;
        }
        
        &:after {
            content: '';
            width: 352px;
            height: 221px;
            filter: blur(100px);
            background-color: ${theme.color.bgColorBlur};
            position: absolute;
            bottom: -70px;
            right: -53px;
            z-index: -1;
        }
        
        @media screen and ${theme.media.tablet} {
            &:after,
            &:before {
                display: none;
            }
        }
    }
`

const MainGridWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 544px) minmax(auto, 575px);
    grid-auto-rows: auto;
    justify-content: space-between;
    grid-row-gap: 72px;
    

    & > div:nth-child(2) {
        grid-area: 1/2/3/3;
        //align-self: center;
    }

    & > div:nth-child(1) {
        padding-top: 26px;
        //align-self: end;
    }
    
    & > div:nth-child(3) {
        padding-bottom: 26px;
        //align-self: start;
    }
    
    @media screen and ${theme.media.tablet} {
        grid-template-columns: minmax(auto, 544px);
        justify-content: center;
        
        & > div:nth-child(1) {
            padding-top: 0;
            text-align: center;

        }
        
        & > div:nth-child(2) {
            grid-area: auto;
        }

        &> div:nth-child(3) {
            padding-bottom: 0;
            grid-area: 3/1/4/2;
        }
    }
`