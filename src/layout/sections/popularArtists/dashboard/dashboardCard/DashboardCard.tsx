import React from 'react';
import {FlexWrapper} from "../../../../../components/FlewWrapper";
import styled from "styled-components";

type DashboardCardPropsType = {
    linkImg: string,
    artistAvatar: string,
    artistName: string
}

export const DashboardCard = (props: {data:DashboardCardPropsType}) => {
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
    overflow: hidden;
    border-radius: 16px;
    //display: flex;
`

const OwnerInfo = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 0 24px 24px;
    //border-radius: 16px;
    background: linear-gradient(1.43deg, rgba(19, 30, 58, 0.92) 17.438%,rgba(19, 30, 58, 0) 51.383%);
`

const OwnerImg = styled.img`

`

const MainImg = styled.img`
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
`