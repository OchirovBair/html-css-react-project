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
                    <SectionTitle>Popular <span>Artists</span> On This Week</SectionTitle>
                    <Button>See All</Button>
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
    grid-template-columns: minmax(auto, 307px) auto;
    grid-template-rows: auto auto;
    //justify-content: space-between;
    //align-items: center;
    grid-row-gap: 84px;

    button {
        justify-self: end;
        align-self: center;
    }
`