import React from 'react';
import {Link} from "../../../../components/Link";
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Button} from "../../../../components/Button";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlewWrapper";

export const MainInformation = () => {
    return (
        <StyledMainInformation>
            <MainTitle>Discover and Collect The Best NFTs <span>Digital Art</span></MainTitle>
            <Text>Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Text>
            {/*<FlexWrapper $gap={'36px'} $align='center' >*/}
                <Button>Explore Now</Button>
                <Link href={'#'}>Learn More</Link>
            {/*</FlexWrapper>*/}
        </StyledMainInformation>
    );
};

const StyledMainInformation = styled.div`
    & > a {
        margin-left: 36px;
        font-weight: 700;
        line-height: 1.2;
    }
`

const MainTitle = styled.h1`
    font-family: 'Canela', sans-serif;
    font-size: clamp(${40}px, calc((100vw - 375px) / (1320 - 375) * (${64} - ${40}) + ${40}px), ${64}px);
    letter-spacing: 0;
    font-weight: 500; /* medium */
    font-style: normal;
    & > span {
        color: ${theme.color.accent};
    }
`
export const Text = styled.p`
    margin: 20px 0 40px;
`
