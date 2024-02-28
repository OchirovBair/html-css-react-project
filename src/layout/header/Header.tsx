import React from 'react';
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/Logo/Logo";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlewWrapper";
import {Button} from "../../components/Button";
import {Container} from "../../components/Container";

const menuItems = ['Marketplace', 'Artists', 'Community', 'Collections'];
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper $justify='space-between' $align='center'>
                    <Logo/>
                    <Menu items={menuItems}/>
                    <Button>Contact</Button>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 28px 0 28px;
    background-color: rgba(0, 0, 0, 0.85);
    position: sticky;
    top: 0;
    z-index: 9999;
`
