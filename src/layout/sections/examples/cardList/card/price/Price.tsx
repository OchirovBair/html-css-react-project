import React from 'react';
import {Icon} from "../../../../../../components/icon/Icon";
import styled from "styled-components";
import {iconData} from "../../../../../../data/iconData";

type PricePropsType = {
    price: number
}

export const Price = (props: PricePropsType) => {
    return (
        <StyledPrice>
            <Icon mainIconState={iconData.priceSvg}/>
            <span>{props.price}ETH</span>
        </StyledPrice>
    );
};

const StyledPrice = styled.div`
    display: flex;
    align-items: center;
`