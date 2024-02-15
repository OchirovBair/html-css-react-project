import React from 'react';
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <a href="">Contact</a>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(164, 164, 164, 0.7);
`
