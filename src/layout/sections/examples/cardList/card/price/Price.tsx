import React from 'react';
import {Icon} from "../../../../../../components/icon/Icon";
import styled from "styled-components";

type PricePropsType = {
    price: number
}

export const Price = (props: PricePropsType) => {
    return (
        <StyledPrice>
            <Icon iconId='priceSvg' width='24px' height='24px' viewBox='0 0 24 24'/>
            <span>{props.price}ETH</span>
        </StyledPrice>
    );
};

const StyledPrice = styled.div`
    display: flex;
    align-items: center;
`