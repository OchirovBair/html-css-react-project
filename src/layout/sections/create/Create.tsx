import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Link} from "../../../components/Link";
import {FlexWrapper} from "../../../components/FlewWrapper";
import img1 from '../../../assets/images/create/img1.png'
import img2 from '../../../assets/images/create/img2.png'
import {theme} from "../../../styles/Theme";

export const Create = () => {
    return (
        <StyledCreate>
            <Container>
                <MainCreateSectionFlexWrapper $gap='48px' $align='center' $justify='space-between'>
                    <StyledCreateInfo>
                        <TextCreateSectionFlexWrapper $direction='column' $justify='center' $align='flex-start'>
                            <SectionTitle>Create And Sell Your <span>Best NFTs</span></SectionTitle>
                            <Text>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</Text>
                            <FlexWrapper $align='center' $gap='36px'>
                                <Button>Create Now</Button>
                                <Link>Learn More</Link>
                            </FlexWrapper>
                        </TextCreateSectionFlexWrapper>
                    </StyledCreateInfo>
                    <StyledExamplesImages>
                        <img src={img1} alt="example"/>
                        <img src={img2} alt="example"/>
                    </StyledExamplesImages>
                </MainCreateSectionFlexWrapper>
            </Container>
        </StyledCreate>
    );
};

const StyledCreate = styled.section`
    & > div {
        position: relative;

        &:before {
            content: '';
            position: absolute;
            background-color: ${theme.color.bgColorBlur};
            width: 346px;
            height: 128px;
            filter: blur(100px);
            bottom: -45px;
            right: 0;
            z-index: -1;
        }
    }
    
`

const MainCreateSectionFlexWrapper = styled(FlexWrapper)`
    @media screen and ${theme.media.tablet} {
            flex-direction: column;
    }
`

const TextCreateSectionFlexWrapper = styled(FlexWrapper)`
    @media screen and ${theme.media.tablet} {
        & > h2,
        & > p {
            text-align: center;
        }
        
        & > div { 
            align-self: center;
        }
    }
`

const StyledExamplesImages = styled.div`
    height: 40vw;
    width: 60vw;
    max-width: 740px;
    min-width: 345px;
    max-height: 560px;
    min-height: 260px;
    position: relative;

    img:first-child {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 55%;
        min-width: 190px;
        min-height: 186px;
    }

    img:last-child {
        position: absolute;
        top: 0;
        right: 0;
        width: 55%;
        min-width: 190px;
        min-height: 220px;
    }
`

const Text = styled.p`
    margin: 20px 0 40px;
    text-align: left;
`

const StyledCreateInfo = styled.div`
    max-width: 426px;
    width: 100%;
    
    & > div > div > a {
        font-weight: 700;
        line-height: 1.2;
    }
`