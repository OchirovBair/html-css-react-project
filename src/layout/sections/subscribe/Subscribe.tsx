import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlewWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import img1 from "../../../assets/images/subscribe/img1.png";
import img2 from "../../../assets/images/subscribe/img2.png";

export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <Container>
                <FlexWrapper gap='124px' align='center'>
                    <StyledSubscribeImages>
                        <img src={img1} alt="example"/>
                        <img src={img2} alt="example"/>
                    </StyledSubscribeImages>
                    <StyledSubscribeInfo>
                        <FlexWrapper direction='column' align='flex-start' >
                            <SectionTitle>Subscribe And get our<br/>Updates Every Week</SectionTitle>
                            <SubscribeText>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly</SubscribeText>
                            <FlexWrapper align='center' gap='36px'>
                                <form action="">
                                    <input type="email" name='email' placeholder='Enter your e-mail'/>
                                    <input type="submit" value='Subscribe'/>
                                </form>
                            </FlexWrapper>
                        </FlexWrapper>
                    </StyledSubscribeInfo>
                </FlexWrapper>
            </Container>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`

`

const StyledSubscribeImages = styled.div`
    position: relative;
    width: 630px;
    height: 458px;

    img:first-child {
        position: absolute;
        top: 0;
        left: 0;
    }

    img:last-child {
        position: absolute;
        bottom: 0;
        z-index: 1;
        right: 0;
    }
`

const StyledSubscribeInfo = styled.div`

`

const SubscribeText = styled.p`
    text-align: left;
    margin: 20px 0 40px;
`