import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlewWrapper";
import {Logo} from "../../components/Logo/Logo";
import {Container} from "../../components/Container";
import {SocialLinks} from "./socialLinks/SocialLinks";
import {Menu} from "./menu/Menu";
import {Link} from "../../components/Link";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <MenuFlexWrapper $justify='space-between' $gap='100px' $align='center'>
                    <FlexWrapper $direction='column'>
                        <Logo/>
                        <FooterText>Discover NFTs by category, track the latest drop, and and follow the collections you
                            love. Enjoy it!</FooterText>
                        <SocialLinks/>
                    </FlexWrapper>
                    {/*<FlexWrapper>*/}
                        <Menu/>
                    {/*</FlexWrapper>*/}
                </MenuFlexWrapper>
                <CopryrigtFlexWrapper $justify='space-between'>
                    <span>© Copyright 2023 - Creativeart</span>
                    <FlexWrapper $gap='28px'>
                        <Link>Privacy Policy</Link>
                        <Link>Terms & Conditions</Link>
                    </FlexWrapper>
                </CopryrigtFlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`

const FooterText = styled.p`
    text-align: left;
    margin: 20px 0 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
`

const MenuFlexWrapper = styled(FlexWrapper)`
    padding: 0 18px 48px;
    border-bottom: 1px solid rgb(131, 131, 130);
    margin-bottom: 48px;
    
    & > div:first-child {
        max-width: 272px;
        width: 100%;
    }
    
    @media screen and ${theme.media.tablet} {
        flex-direction: column;
        align-items: flex-start;
    }
`

const CopryrigtFlexWrapper = styled(FlexWrapper)`
    & > span {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
    }
    
    @media screen and ${theme.media.mobile} {
        flex-direction: column;
        gap: 16px;
    }
`