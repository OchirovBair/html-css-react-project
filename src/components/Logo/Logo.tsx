import React from 'react';
import {Icon} from "../icon/Icon";
import {iconData} from "../../data/iconData";



export const Logo = () => {
    return (
        <a href="#">
            <Icon mainIconState={iconData.logo}/>
        </a>
    );
};
