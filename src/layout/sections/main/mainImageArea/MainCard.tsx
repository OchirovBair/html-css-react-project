import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import MainImg from "../../../../assets/images/mainSection/mainImg.png";
import {FlexWrapper} from "../../../../components/FlewWrapper";
import {Button} from "../../../../components/Button";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

export const MainCard = (props: any) => {
    return (
        <StyledMainImageArea>
            <StyledIconWrapper>
                <Icon iconId='desktopMainSectionSvg' width="171.594971" height="171.501465"
                      viewBox="0 0 171.595 171.501"/>
            </StyledIconWrapper>
            <MainImage src={MainImg} alt="mainSection"/>
            <CardPlaceholder>
                <FlexWrapper $direction='column' $gap='24px'>
                    <FlexWrapper $justify='space-between'>
                        <FlexWrapper $direction='column'>
                            <span>Ends in</span>
                            <span>{props.data.endingTime}</span>
                        </FlexWrapper>
                        <FlexWrapper $direction='column'>
                            <span>Current bid</span>
                            <span>{props.data.priceInEth}ETH</span>
                        </FlexWrapper>
                    </FlexWrapper>
                    <Button $bg_color='unset' $outline='1px solid rgb(211, 248, 90)' $font_color={theme.color.accent}>Place A
                        Bid</Button>
                </FlexWrapper>
            </CardPlaceholder>
        </StyledMainImageArea>
    );
};


const StyledMainImageArea = styled.div`
    position: relative;
    padding: 0 50px 93px 60px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledIconWrapper = styled.div`
    position: absolute;
    z-index: 1;
    top: 35%;
    left: 0;
`

const MainImage = styled.img`
    max-width: 464px;
    max-height: 544px;
    min-width: 294px;
    min-height: 344px;
    width: 100%;
    //height: auto;
    //margin: 0 50px 93px 60px;
`

const CardPlaceholder = styled.div`
    border-radius: 16px;
    border-top: 1px solid rgb(211, 248, 90);
    box-shadow: 0 9px 50px 0 rgba(23, 36, 65, 0.04);
    background: ${theme.color.bgColor};
    padding: 20px;
    max-width: 304px;
    width: 100%;
    gap: 24px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;

    & span:first-child {
        color: ${theme.color.accent};
    }
`