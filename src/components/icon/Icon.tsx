import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import {useMediaQuery} from "react-responsive";

export type IconType = {
    width: string,
    height: string,
    viewBox: string,
    iconId: string,
}
type IconPropsType = {
    mainIconState: IconType
    mediaIconState?: IconType
    mediaQuery?: string
}

export const Icon = ({mainIconState, mediaIconState, mediaQuery}: IconPropsType) => {
    const isMedia = useMediaQuery({query: mediaQuery || '(min-width: 0)'})
    const mainIcon = () => {
        return (
            <svg width={mainIconState.width}
                 height={mainIconState.height}
                 viewBox={mainIconState.viewBox}
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${mainIconState.iconId}`}/>
            </svg>
        )
    }


    if (mediaIconState === undefined) {
        return mainIcon()
    } else {
        const mediaIcon = () => {
            return (
                <svg width={mediaIconState.width}
                     height={mediaIconState.height}
                     viewBox={mediaIconState.viewBox}
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${iconsSprite}#${mediaIconState.iconId}`}/>
                </svg>
            )
        }

        return isMedia ? mediaIcon() : mainIcon()
    }
};