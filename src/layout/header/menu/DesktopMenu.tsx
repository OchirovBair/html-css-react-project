import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlewWrapper";
import {Link} from "../../../components/Link";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {Logo} from "../../../components/Logo/Logo";

type MenuPropsType = {
    items: Array<string>
}

export const DesktopMenu = (props: MenuPropsType) => {
    return (
        <StyledDesktopMenu>
            <FlexWrapper $justify={'space-between'} $align={'center'}>
                <Logo/>
                <ul>
                    {props.items.map((item, index) => {
                        return <ListItem key={index}><Link href={'#'}>{item}</Link></ListItem>
                    })}
                </ul>
                <Button>Contact</Button>
            </FlexWrapper>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav`
    width: 100%;
    ul {
        display: flex;
        gap: 20px;
    }

    @media screen and ${theme.media.largeTablet} {
        display: none;
    }
`

const ListItem = styled.li`

`
