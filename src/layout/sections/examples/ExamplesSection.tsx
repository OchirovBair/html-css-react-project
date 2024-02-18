import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";
import {CardList} from "./cardList/CardList";

export const ExamplesSection = () => {
    return (
        <StyledExamples>
            <Container>
                <ExamplesGirdWrapper>
                    <div>
                        <SectionTitle>Amazing and Super</SectionTitle>
                        <SectionTitle>Unique Art of This Week</SectionTitle>
                    </div>
                    <Button width='134px' height='52px'>See All</Button>
                    <CardList/>
                </ExamplesGirdWrapper>
            </Container>
        </StyledExamples>
    );
};

const StyledExamples = styled.div`
    height: 100%;
`

const ExamplesGirdWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    align-items: end;
    row-gap: 64px;

    div:nth-child(2) {
       
    }

    button {
        justify-self: end;
        
    }
`

