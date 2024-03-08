import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";

type BurgerButtonPropsType = {
    isOpen: boolean
    callback: ()=>void
}

type StyledBurgerButtonPropsType = {
    isOpen: boolean
}

export const BurgerButton = ({isOpen, callback}: BurgerButtonPropsType) => {
    const onClickButtonHandler = () => {
        callback();
    }
    return (
        <StyledBurgerButton onClick={onClickButtonHandler} isOpen={isOpen}>
                <span></span>
        </StyledBurgerButton>
    );
};

const StyledBurgerButton = styled.button<StyledBurgerButtonPropsType>`
    width: 24px;
    height: 24px;
    z-index: 99;

    span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${theme.color.primaryFont};
        position: relative;

        ${props => props.isOpen && css<StyledBurgerButtonPropsType>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            width: 24px;
            height: 2px;
            background-color: ${theme.color.primaryFont};
            position: absolute;
            transform: translateY(-9px);
            right: 0;

            ${props => props.isOpen && css<StyledBurgerButtonPropsType>`
                transform: translateY(0px) rotate(45deg);
            `}
        }

        &::after {
            content: '';
            width: 24px;
            height: 2px;
            background-color: ${theme.color.primaryFont};
            position: absolute;
            transform: translateY(9px);
            right: 0;

            ${props => props.isOpen && css<StyledBurgerButtonPropsType>`
                transform: translateY(0px) rotate(-45deg);
            `}
        }
    }
`