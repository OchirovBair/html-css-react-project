import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";
import {CardList} from "./cardList/CardList";
import {theme} from "../../../styles/Theme";

export const ExamplesSection = () => {
    return (
        <StyledExamples>
            <Container>
                <ExamplesGridWrapper>
                    <SectionTitle><span>Amazing</span> and Super Unique Art of This <span>Week</span></SectionTitle>
                    <CardList/>
                    <Button>See All</Button>
                </ExamplesGridWrapper>
            </Container>
        </StyledExamples>
    );
};

const StyledExamples = styled.section`
    & > div {
        position: relative;

        &:before {
            content: '';
            position: absolute;
            width: 434px;
            height: 305px;
            background-color: ${theme.color.bgColorBlur};
            filter: blur(100px);
            bottom: -140px;
            right: 0;
            z-index: -1;

            @media screen and ${theme.media.smallDesktop} {

                    display: none;

            }
        }
    }
`


const ExamplesGridWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 506px) auto;
    grid-template-rows: auto auto;
    //justify-content: space-between;
    grid-row-gap: 64px;
    text-align: left;

    button {
        justify-self: end;
        align-self: center;
    }
    
    @media screen and ${theme.media.smallDesktop} {
        grid-template-columns: auto;
        grid-auto-rows: auto;
        grid-row-gap: 32px;

        button {
            justify-self: center;
            align-self: center;
        }
        
        h2 {
            text-align: center;
            
        }
    }
`

