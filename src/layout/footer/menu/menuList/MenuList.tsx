import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

type MenuLustPropsType = {
    items: Array<string>
    title: string
}

export const MenuList = (props: MenuLustPropsType) => {
    return (
        <StyledMenuList>
            <ThirdTitle>{props.title}</ThirdTitle>
            <ul>
                {props.items.map((item, index) => {
                    return <ListItem key={index}><Link href='#'>{item}</Link></ListItem>
                })}
            </ul>
        </StyledMenuList>
    );
};

const StyledMenuList = styled.nav`

`

const ListItem = styled.li`

`

const ThirdTitle = styled.h3`
    margin-bottom: 24px;
`