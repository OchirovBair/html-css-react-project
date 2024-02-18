import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    width?: string,
    height?: string,
    viewBox?: string,
    iconId: string,
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '24px'} height={props.height || '24px'} viewBox={props.viewBox || '0 0 24 24'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};
