import React from 'react';
import {Link} from "../../../../components/Link";
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Text} from "../../../../components/Text";

export const MainInformation = () => {
    return (
        <StyledMainInformation>
            <SectionTitle>Discover and</SectionTitle>
            <SectionTitle>Collect The Best</SectionTitle>
            <MainTitle>NFTs Digital Art</MainTitle>
            <Text>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Text>
            <Link href={'#'}>Explore Now</Link>
            <Link href={'#'}>Learn More</Link>
        </StyledMainInformation>
    );
};

const StyledMainInformation = styled.div`

`

const MainTitle = styled.h1`

`