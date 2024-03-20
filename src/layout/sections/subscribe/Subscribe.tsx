import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlewWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import img1 from "../../../assets/images/subscribe/img1.png";
import img2 from "../../../assets/images/subscribe/img2.png";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";

export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <Container>
                <SubscribeSectionWrapper>
                    <StyledSubscribeImages>
                        <img src={img1} alt="example"/>
                        <img src={img2} alt="example"/>
                    </StyledSubscribeImages>
                    <StyledSubscribeInfo>
                        <FlexWrapper $direction='column'>
                            <SectionTitle>Subscribe And <span>get our Updates</span> Every Week</SectionTitle>
                            <Text>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated weekly</Text>
                            <FlexWrapper $align='center' $gap='36px'>
                                <SubscribeForm>
                                    <Input type="email" name='email' placeholder='Enter your e-mail'/>
                                    <div>
                                        <Button type={'submit'}>Subscribe</Button>
                                    </div>
                                </SubscribeForm>
                            </FlexWrapper>
                        </FlexWrapper>
                    </StyledSubscribeInfo>
                </SubscribeSectionWrapper>
            </Container>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`
    
    & > div {
        position: relative;
        
        &:before {
            position: absolute;
            content: '';
            background-color: ${theme.color.bgColorBlur};
            filter: blur(150px);
            width: 513px;
            height: 358px;
            top: -100px;
            left: -100px;
            z-index: -1;
        }

        &:after {
            position: absolute;
            content: '';
            background-color: ${theme.color.bgColorBlur};
            filter: blur(100px);
            width: 345px;
            height: 93px;
            bottom: -65px;
            left: 40px;
            z-index: -1;
        }
        
        @media screen and ${theme.media.mobile}{
            &:before,
            &:after {
                display: none;
            }
        }
    }

`

const SubscribeSectionWrapper = styled.div`
    display: flex;
    gap: 48px;
    align-items: center;
    justify-content: space-between;
    
    @media screen and ${theme.media.tablet} {
        display: grid;
        grid-template-columns: minmax(343px, auto);
        grid-auto-rows: auto;
        justify-content: center;
        
        & > div:first-child {
            grid-area: 2/1/3/2;
        }
        
        & > div:last-child {
            grid-area: 1/1/2/2;

            & > div > p,
            & > div > h2 {
                text-align: center;
            }
        }
        
    }
`

const StyledSubscribeImages = styled.div`
    position: relative;
    height: clamp(${250}px, calc((100vw - 375px) / (1320 - 375) * (${458} - ${250}) + ${250}px), ${458}px);
    //width: clamp(${343}px, calc((100vw - 375px) / (1320 - 375) * (${630} - ${343}) + ${343}px), ${630}px);
    max-width: 630px;
    min-width: 343px;
    width: 100%;
    //max-height: 458px;
    //min-height: 250px;

    img:first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 65%;    
    }

    img:last-child {
        position: absolute;
        bottom: 0;
        z-index: 1;
        right: 0;
        width: 45%;
        
        
    }
`

const StyledSubscribeInfo = styled.div`
    max-width: 520px;
    width: 100%;
`

const Text = styled.p`
    text-align: left;
    margin: 20px 0 40px;
`

const SubscribeForm = styled.form`
    width: 100%;
    position: relative;
    
    & > div {
        position: absolute;
        z-index: 1;
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;

        
        @media screen and ${theme.media.largeTablet} {
            position: static;
            right: auto;
            top: auto;
            transform: translateY(0);
            margin-top: 20px;
        }
    }
`

const Input = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 8px;
    background-color: ${theme.color.bgColor};

    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    padding: 17px 180px 17px 24px;
    color: ${theme.color.primaryFont};
    border: none;


    
    &::placeholder {
        color: ${theme.color.primaryFont};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 4px #D3F85A;

       &::placeholder {
            color: #999;
       }
    }
`