import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Dashboard} from "./dashboard/Dashboard";


export const PopularArtists = () => {
    return (
        <StyledPopularArtists>
            <Container>
                <PopularArtistsGridWrapper>
                    <div>
                        <SectionTitle>Popular Artists<br/>On This Week</SectionTitle>
                    </div>
                    <Button width='134px' height='52px'>See All</Button>
                    <Dashboard/>
                </PopularArtistsGridWrapper>
            </Container>
        </StyledPopularArtists>
    );
};

const StyledPopularArtists = styled.section`
`

const PopularArtistsGridWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    align-items: center;

    button {
        justify-self: end;
    }

    .dashboard {
        grid-area: 2/1/3/3;
    }

    //div:last-child {
    //    grid-area: 2/1/3/3;
    //}
`