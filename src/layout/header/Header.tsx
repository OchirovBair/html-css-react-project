import React from 'react';
import {Menu} from "../../components/menu/Menu";
import {Logo} from "./logo/Logo";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlewWrapper";
import {Link} from "../../components/Link";
import {Container} from "../../components/Container";

const menuItems = ['Marketplace', 'Artists', 'Community', 'Collections'];
export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify='space-between' align='center'>
                <Logo/>
                <Menu items={menuItems}/>
                <Link href={'#'}>Contact</Link>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 28px 0 24px;
    max-width: 1320px;
    width: 100%;
    height: 100%;
    outline: 2px solid green;
    margin: 0 auto;
`
