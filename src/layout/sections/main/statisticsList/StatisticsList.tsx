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
                <li>
                    <h2><span>67</span>K</h2>
                    <span>Artist</span>
                </li>
                <li>
                    <h2><span>87</span>K</h2>
                    <span>Collection</span>
                </li>
            </ul>
        </StyledStatisticsList>
    );
};


const StyledStatisticsList = styled.div`
    ul {
        display: flex;
        gap: 94px;
        
        & > li > span {
            font-family: Inter, sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.6;
        }
    }
    
    h2 {
        font-family: Canela, sans-serif;
        font-size: 48px;
        font-weight: 500;
        
        & > span {
            color: ${theme.color.accent}
        }
    }
`