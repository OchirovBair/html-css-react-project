import React from 'react';
import {Link} from "../../../../components/Link";
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Button} from "../../../../components/Button";

export const MainInformation = () => {
    return (
        <StyledMainInformation>
            <MainTitle>Discover and&#10;Collect The Best&#10;NFTs Digital Art</MainTitle>
            <Text>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Text>
            <Button>Explore Now</Button>
            <Link href={'#'}>Learn More</Link>
        </StyledMainInformation>
    );
};

const StyledMainInformation = styled.div`
    //align-self: end;
`

const MainTitle = styled.h1`
    font-family: 'Canela', sans-serif;
    font-size: 64px;
    letter-spacing: 0;
    font-weight: 500; /* medium */
    font-style: normal;
`
export const Text = styled.p`
    text-align: left;
    margin: 20px 0 40px;
`
