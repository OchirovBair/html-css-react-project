import React from 'react';
import styled from "styled-components";
import {MenuList} from "./menuList/MenuList";
import {theme} from "../../../styles/Theme";

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

const StyledMenu = styled.nav`
    display: flex;
    gap: 40px;
    justify-content: space-between;
    max-width: 688px;
    width: 100%;
    
    @media screen and ${theme.media.largeTablet} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto;
        
    }
`