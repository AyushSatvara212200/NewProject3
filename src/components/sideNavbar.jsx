import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import RegistrationIcon from '@mui/icons-material/AppRegistration';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useNavigate } from "react-router";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import authActions from "../redux/reducers/auth/actions";
import { useSelector } from "react-redux";
import TvIcon from '@mui/icons-material/Tv';
import Tooltip from '@mui/material/Tooltip'

const StyledSideNav = styled(SideNav)`
  height: 90% !important;
  top: 5% !important;
  border-radius: 20px;
  background-color: #15009db5 !important;
  backdrop-filter: blur(15px);
  box-shadow: -2px 0px 9px -1px #00000080;
`;
const StyledHomeIcon = styled(HomeIcon)`
  /* margin-top: 12px; */
`;
const StyledChartIcon = styled(BarChartIcon)`
  /* margin-top: 12px; */
`;
const StyledLogoutIcon = styled(LogoutIcon)`
  /* margin-top: 12px; */
`;
const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  /* margin-top: 12px; */
`;
const StyledPersonIcon = styled(PersonIcon)`
  /* margin-top: 12px; */
`;
const StyledUpgradeIcon = styled(UpgradeIcon)`
  /* margin-top: 12px; */
`;
const StyledRegistrationIcon = styled(RegistrationIcon)`
  /* margin-top: 12px; */
`;
const StyledReceiptIcon = styled(ReceiptIcon)`
  /* margin-top: 12px; */
`;

const SideNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const username = localStorage.getItem("username");
  const { loggedIn, userdata } = useSelector((state) => state.auth);
  return (
    <>
      <StyledSideNav
        onSelect={(selected) => {
          console.log(selected);

          if (selected === "") {
            dispatch(authActions.logoutAuthUser());
          }
          navigate("/" + selected);
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav>
          <NavItem eventKey="account/personal">
            <NavIcon>
              <StyledPersonIcon />
            </NavIcon>
            <NavText>Welcome   {userdata.firstName || ""} !!</NavText>
          </NavItem>
          <NavItem eventKey="mainpage">
            <NavIcon>
            <Tooltip  title="Home" arrow placement="right"><StyledHomeIcon /></Tooltip>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="posts">
            <NavIcon>
            <Tooltip  title="Posts" arrow placement="right"><TvIcon /></Tooltip>
            </NavIcon>
            <NavText>Posts</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <StyledChartIcon />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem>

          <NavItem eventKey="account">
            <NavIcon>
              <StyledAccountCircleIcon />
            </NavIcon>
            <NavText>My Account</NavText>
            <NavItem eventKey="account/personal">
              <NavText>Personal Detail</NavText>
            </NavItem>
            <NavItem eventKey="account/nominee">
              <NavText>Nominee Detail</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="personalDetail">
            <NavIcon>
            <Tooltip  title="Update Profile" arrow placement="right"><StyledUpgradeIcon /></Tooltip>
            </NavIcon>
            <NavText>Update Profile</NavText>
          </NavItem>
          <NavItem eventKey="addmember">
            <NavIcon>
            <Tooltip  title="Register Nominee" arrow placement="right"><StyledRegistrationIcon /></Tooltip>
            </NavIcon>
            <NavText>Register Nominee</NavText>
          </NavItem>
          <NavItem eventKey="transactions">
            <NavIcon>
            <Tooltip  title="Transactions" arrow placement="right"><StyledReceiptIcon /></Tooltip>
            </NavIcon>
            <NavText>Transactions</NavText>
          </NavItem>
          <NavItem eventKey="">
            <NavIcon>
            <Tooltip  title="Log Out" arrow placement="right"><StyledLogoutIcon /></Tooltip>
            </NavIcon>
            <NavText>Log Out</NavText>
          </NavItem>
        </SideNav.Nav>
      </StyledSideNav>
    </>
  );
};

export default SideNavbar;
