import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import styled from 'styled-components';


const StyledSideNav = styled(SideNav)`
height: 90% !important;
top: 5% !important;
border-radius: 20px;
background-color: #00479d80 !important;
backdrop-filter: blur(3px);
box-shadow:  -2px 0px 9px -1px #00000080;
`
const StyledHomeIcon = styled(HomeIcon)`
    margin-top: 12px;
`
const StyledChartIcon = styled(BarChartIcon)`
    margin-top: 12px;
`
const StyledLogoutIcon = styled(LogoutIcon)`
    margin-top: 12px;
`

const SideNavbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <StyledSideNav
                onSelect={(selected) => {
                    console.log(selected);
                    navigate("/" + selected);
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected='home'>
                    <NavItem eventKey="mainpage">
                        <NavIcon >
                            <StyledHomeIcon />
                        </NavIcon>
                        <NavText >
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <StyledChartIcon />
                        </NavIcon>
                        <NavText>
                            Charts
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText >
                                Line Chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                            </NavText>
                        </NavItem>
                    </NavItem>

                    <NavItem eventKey="">
                        <NavIcon>
                            <StyledLogoutIcon />
                        </NavIcon>
                        <NavText>
                            Log Out
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </StyledSideNav>
        </>
    )
}

export default SideNavbar;