import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {FlexWrapper} from "../../../components/FlewWrapper";
import {Link} from "../../../components/Link";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {Logo} from "../../../components/Logo/Logo";
import {BurgerButton} from "./burgerButton/StyledBurgerButton";

type MenuPropsType = {
    items: Array<string>
}

type PopupMenuType = {
    isOpen: boolean
    callback?: ()=>void
}


export const BurgerMenu = (props: MenuPropsType) => {
    let [isOpen, setIsOpen] = useState(false);

    const getIsOpen = () => {
        // debugger?
        setIsOpen(!isOpen)
    }

    return (
        <StyledBurgerMenu>
            <FlexWrapper $justify={'space-between'} $align={'center'}>
                <Logo/>
                <BurgerButton isOpen={isOpen} callback={getIsOpen}/>
                <BurgerMenuPopup isOpen={isOpen}>
                    <ul>
                        {props.items.map((item, index) => {
                            return <ListItem key={index}><Link href={'#'}>{item}</Link></ListItem>
                        })}
                    </ul>
                    <Button>Contact</Button>
                </BurgerMenuPopup>
            </FlexWrapper>
        </StyledBurgerMenu>
    );
};

const StyledBurgerMenu = styled.nav`
    display: none;
    width: 100%;

    & > div > span {
        width: 24px;
        height: 2px;
        background-color: ${theme.color.primaryFont};
        position: relative;

        &:before {
            content: '';
            width: 24px;
            height: 2px;
            background-color: ${theme.color.primaryFont};
            position: absolute;
            top: -9px;
        }

        &:after {
            content: '';
            width: 24px;
            height: 2px;
            background-color: ${theme.color.primaryFont};
            position: absolute;
            bottom: -9px;
        }
    }


    @media screen and ${theme.media.largeTablet} {
        display: block;
    }
`

const BurgerMenuPopup = styled.div<PopupMenuType>`
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9;
    background-color: ${theme.color.bgColor};

    ${props => props.isOpen && css<PopupMenuType>`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
        flex-direction: column;
    `}
    ul {
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: center;
    }
`

const ListItem = styled.li`

`
