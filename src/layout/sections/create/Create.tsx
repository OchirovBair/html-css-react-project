import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Text} from "../../../components/Text";
import {Button} from "../../../components/Button";
import {Link} from "../../../components/Link";
import {FlexWrapper} from "../../../components/FlewWrapper";
import img1 from '../../../assets/images/create/img1.png'
import img2 from '../../../assets/images/create/img2.png'

export const Create = () => {
    return (
        <StyledCreate>
            <Container>
                <FlexWrapper gap='124px' align='center'>
                    <StyledCreateInfo>
                        <FlexWrapper direction='column' justify='center' align='flex-start'>
                            <SectionTitle>Create And Sell<br/>Your Best NFTs</SectionTitle>
                            <CreateText>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</CreateText>
                            <FlexWrapper align='center' gap='36px'>
                                <Button>Create Now</Button>
                                <Link>Learn More</Link>
                            </FlexWrapper>
                        </FlexWrapper>
                    </StyledCreateInfo>
                    <StyledExamplesImages>
                        <img src={img1} alt="example"/>
                        <img src={img2} alt="example"/>
                    </StyledExamplesImages>
                </FlexWrapper>
            </Container>
        </StyledCreate>
    );
};

const StyledCreate = styled.section`

`

const StyledExamplesImages = styled.div`
    height: 560px;
    width: 740px;
    position: relative;
    
    img:first-child {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
    }
    
    img:last-child {
        position: absolute;
        top: 0;
        right: 0;
    }
`

const CreateText = styled(Text)`
    margin: 20px 0 40px;
    text-align: left;
`

const StyledCreateInfo = styled.div`
    max-width: 426px;
    width: 100%;
`