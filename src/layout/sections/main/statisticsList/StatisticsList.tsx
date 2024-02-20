import styled from "styled-components";

import React from 'react';

export const StatisticsList = () => {
    return (
        <StyledStatisticsList>
            <ul>
                <li>
                    <h2>8.9K</h2>
                    <span>Art work</span>
                </li>
                <li>
                    <h2>67K</h2>
                    <span>Artist</span>
                </li>
                <li>
                    <h2>87K</h2>
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
    }
`