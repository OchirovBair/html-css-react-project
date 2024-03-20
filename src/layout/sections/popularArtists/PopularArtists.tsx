import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Dashboard} from "./dashboard/Dashboard";
import {theme} from "../../../styles/Theme";


export const PopularArtists = () => {
    return (
        <StyledPopularArtists>
            <Container>
                <PopularArtistsGridWrapper>
                    <SectionTitle>Popular <span>Artists</span> On This Week</SectionTitle>
                    <Dashboard/>
                    <Button>See All</Button>
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
    grid-row-gap: 84px;
    

    button {
        justify-self: end;
        align-self: center;
    }
    
    @media screen and ${theme.media.smallDesktop} {
        grid-template-columns: auto;
        grid-auto-rows: auto;
        justify-items: center;
        grid-row-gap: 32px;
        
        & > button {
            justify-self: center;
        }
    }
`