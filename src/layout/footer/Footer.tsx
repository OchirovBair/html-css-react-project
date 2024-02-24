import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlewWrapper";
import {Logo} from "../../components/Logo/Logo";
import {Container} from "../../components/Container";
import {SocialLinks} from "./socialLinks/SocialLinks";
import {Menu} from "./menu/Menu";
import {Text} from "../../components/Text";
import {Link} from "../../components/Link";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <MenuFlexWrapper $gap='293px'>
                    <FlexWrapper $direction='column'>
                        <Logo/>
                        <FooterText>Discover NFTs by category, track the latest drop, and and follow the collections you
                            love. Enjoy it!</FooterText>
                        <SocialLinks/>
                    </FlexWrapper>
                    <FlexWrapper>
                        <Menu/>
                    </FlexWrapper>
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
`

const MenuFlexWrapper = styled(FlexWrapper)`
    padding: 0 18px 48px;
    border-bottom: 1px solid rgb(131, 131, 130);
    margin-bottom: 48px;
`

const CopryrigtFlexWrapper = styled(FlexWrapper)`
    
`