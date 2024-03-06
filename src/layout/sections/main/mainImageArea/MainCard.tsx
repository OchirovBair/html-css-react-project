import React from 'react';
import {Icon, IconType} from "../../../../components/icon/Icon";
import MainImg from "../../../../assets/images/mainSection/mainImg.png";
import {FlexWrapper} from "../../../../components/FlewWrapper";
import {Button} from "../../../../components/Button";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const mainIcon: IconType = {
    width: "171.594971",
    height: "171.501465",
    viewBox: "0 0 171.595 171.501",
    iconId: 'desktopMainSectionSvg'
}

const mediaIcon: IconType = {
    width: "81.972717",
    height: "81.972717",
    viewBox: "0 0 81.9727 81.2578",
    iconId: 'mediaMainSectionSvg'
}

export const MainCard = (props: any) => {
    return (
        <StyledMainImageArea>
            <StyledIconWrapper>
                <Icon mainIconState={mainIcon} mediaIconState={mediaIcon} mediaQuery={theme.media.largeTablet}/>
            </StyledIconWrapper>
            <MainImage src={MainImg} alt="mainSection"/>
            <CardPlaceholder>
                <FlexWrapper $direction='column' $justify={'space-between'}>
                    <FlexWrapper $justify='space-between'>
                        <FlexWrapper $direction='column' $gap={'8px'}>
                            <span>Ends in</span>
                            <span>{props.data.endingTime}</span>
                        </FlexWrapper>
                        <FlexWrapper $direction='column' $gap={'8px'}>
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
    
    
    @media screen and ${theme.media.largeTablet}{
        padding: 0 20px 76px 29px;
    }
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
    width: 304px;
    height: 169px;
    gap: 24px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;

    & span:first-child {
        color: ${theme.color.accent};
    }

    & > div > div > div > span:last-child {
        font-size: 16px;
        font-weight: 700;
    }


    @media screen and ${theme.media.largeTablet} {
        width: 224px;
        height: 137px;
        padding: 12px;

        & > div > div > div > span:first-child {
            font-size: 14px;
        }
    }
`