import styled from "styled-components";

import React from 'react';
import {theme} from "../../../../styles/Theme";

export const StatisticsList = () => {
    return (
        <StyledStatisticsList>
            <ul>
                <li>
                    <h2><span>8.9</span>K</h2>
                    <span>Art work</span>
                </li>
                <li></li>
                <li>
                    <h2><span>67</span>K</h2>
                    <span>Artist</span>
                </li>
                <li></li>
                <li>
                    <h2><span>87</span>K</h2>
                    <span>Col</span>
                </li>
            </ul>
        </StyledStatisticsList>
    );
};


const StyledStatisticsList = styled.div`
    width: 100%;
    ul {
        display: flex;
        gap: 27px;
        justify-content: space-between;

        & > li:nth-child(4),
        & > li:nth-child(2) {
            position: relative;
            
            &:after {
                content: '';
                display: inline-block;
                background-color: ${theme.color.accent};
                height: 100%;
                width: 1px;
                position: absolute;
                bottom: 0;
                //right: -27px;
            }
        }

        & > li > span {
            font-size: 16px;
            line-height: 1.6;
        }
    }

    h2 {
        font-size: clamp(${30}px, calc((100vw - 375px) / (1320 - 375) * (${48} - ${30}) + ${30}px), ${48}px);
        
        & > span {
            color: ${theme.color.accent}
        }
    }
`