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
            <List>
                {props.items.map((item, index) => {
                    return <ListItem key={index}><Link href='#'>{item}</Link></ListItem>
                })}
            </List>
        </StyledMenuList>
    );
};

const StyledMenuList = styled.div`

`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const ListItem = styled.li`

`

const ThirdTitle = styled.h3`
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 700;
`