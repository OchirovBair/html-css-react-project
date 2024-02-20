import React from 'react';
import styled from "styled-components";
import {MenuList} from "./menuList/MenuList";

const exploreItems = {
    title: 'Explore',
    items: ['Art Sign In', 'Collectibles', 'Domain Name', 'Utility'],
};

const statisticItems = {
    title: 'Statistic',
    items: ['Ranking', 'Collectibles', 'Activity'],
};

const companyItems = {
    title: 'Company',
    items: ['About Us', 'Career', 'Support', 'Partners'],
};

const resourcesItems = {
    title: 'Resources',
    items: ['Help Center', 'Platform Status', 'Blog'],
};


export const Menu = () => {
    return (
        <StyledMenu>
            <MenuList items={exploreItems.items} title={exploreItems.title}/>
            <MenuList items={statisticItems.items} title={statisticItems.title}/>
            <MenuList items={companyItems.items} title={companyItems.title}/>
            <MenuList items={resourcesItems.items} title={resourcesItems.title}/>
        </StyledMenu>
    );
};

const StyledMenu = styled.div`
    display: flex;
    gap: 94px;
`