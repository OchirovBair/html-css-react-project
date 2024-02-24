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
                    <Button>See All</Button>
                    <CardList/>
                </ExamplesGridWrapper>
            </Container>
        </StyledExamples>
    );
};

const StyledExamples = styled.section`

`

const ExamplesGridWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 506px) min-content;
    grid-template-rows: auto auto;
    justify-content: space-between;
    grid-row-gap: 64px;
`

