import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";
import {iconData} from "../../../data/iconData";

export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
                <li><a href=""><Icon mainIconState={iconData.facebook}/></a></li>
                <li><a href=""><Icon mainIconState={iconData.telegram}/></a></li>
                <li><a href=""><Icon mainIconState={iconData.twitter}/></a></li>
                <li><a href=""><Icon mainIconState={iconData.linkedIn}/></a></li>
        </StyledSocialLinks>
    );
};

const StyledSocialLinks = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 12px;
    
    a:hover {
        //transform: translateY();
        color: ${theme.color.accent};
    }
`