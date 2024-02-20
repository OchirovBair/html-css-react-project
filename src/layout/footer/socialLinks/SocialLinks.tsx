import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const SocialLinks = () => {
    return (
        <StyledSocialLinks>
                <li><a href=""><Icon iconId='facebook' width='24px' height='24px' viewBox='0 0 24 24'/></a></li>
                <li><a href=""><Icon iconId='telegram' width='24px' height='24px' viewBox='0 0 24 24'/></a></li>
                <li><a href=""><Icon iconId='twitter' width='24px' height='24px' viewBox='0 0 24 24'/></a></li>
                <li><a href=""><Icon iconId='linkedIn' width='24px' height='24px' viewBox='0 0 24 24'/></a></li>
        </StyledSocialLinks>
    );
};

const StyledSocialLinks = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 12px;
`