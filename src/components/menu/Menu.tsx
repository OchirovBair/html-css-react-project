import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlewWrapper";
import {Link} from "../Link";

type MenuPropsType = {
    items: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <FlexWrapper>
                <ul>
                    {props.items.map((item, index) => {
                        return <ListItem key={index}><Link href={'#'}>{item}</Link></ListItem>
                    })}
                </ul>
            </FlexWrapper>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }
`

const ListItem = styled.li`

`
