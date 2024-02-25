import React from 'react';
import styled from "styled-components";
import {data} from "../../../../data/data";
import {DashboardCard} from "./dashboardCard/DashboardCard";


export const Dashboard = () => {
    return (
        <StyledDashboard>
            <DashboardCard data={data.popularArtist.artist1}/>
            <DashboardCard data={data.popularArtist.artist2}/>
            <DashboardCard data={data.popularArtist.artist3}/>
            <DashboardCard data={data.popularArtist.artist4}/>
            <DashboardCard data={data.popularArtist.artist5}/>
        </StyledDashboard>
    );
};


const StyledDashboard = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 300px) 80px minmax(auto, 410px) minmax(auto, 410px);
    grid-auto-rows: auto;
    gap: 30px;
    grid-area: 2/1/3/3;

    div:nth-child(2) {
        grid-area: 1/2/2/4;
    }

    div:nth-child(3) {
        grid-area: 1/4/3/5;
    }

    div:nth-child(4) {
        grid-area: 2/1/3/3;
    }

    div:nth-child(5) {
        grid-area: 2/3/3/4;
    }

// `
