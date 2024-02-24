import React from 'react';
import {FlexWrapper} from "../../../../../components/FlewWrapper";
import styled from "styled-components";

export const DashboardCard = (props: any) => {
    return (
        <StyledDashboardCard>
            <MainImg src={props.data.linkImg} alt="nft"/>
            <OwnerInfo>
                <OwnerImg src={props.data.artistAvatar} alt="avatar"/>
                <FlexWrapper $direction='column'>
                    <span>Owner</span>
                    <span>{props.data.artistName}</span>
                </FlexWrapper>
            </OwnerInfo>
        </StyledDashboardCard>
    );
};

const StyledDashboardCard = styled.div`
    position: relative;
`

const OwnerInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    position: absolute;
    bottom: 24px;
    left: 24px;
`

const OwnerImg = styled.img`

`

const MainImg = styled.img`

`