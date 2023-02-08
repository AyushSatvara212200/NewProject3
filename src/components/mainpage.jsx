import React, { Component } from "react";
import { Navigate } from "react-router";
import styled from "styled-components";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { NavLink } from "react-router-dom";
import image from "../Images/poly.png";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import SideNavbar from './sideNavbar';

const Conatiner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 100px;
`;
const Wrapper = styled.div`
  width: 60%;
  height: 60%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ffffff63;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  gap: 25px;
  font-family: "Maven Pro", sans-serif I !important;
`;
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
`
const StyledButton = styled(AwesomeButton)`
  width: 210px;
  height: 60px;
  font-family: "Urbanist", sans-serif !important;
  font-weight: 800 !important;
  font-size: 20px !important;
  --button-secondary-color: #1e88e5;
  --button-secondary-color-dark: #001e57;
  --button-secondary-color-light: #001e57;
  --button-secondary-color-hover: #1e88e5;
  --button-secondary-color-active: #1e88e5;
  --button-secondary-border: 1px solid #001e57;
`;

export default class mainpage extends Component {
    constructor(props) {
        super(props);
        let loggedIn = true;
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");

        if (token === null) {
            loggedIn = false;
        }
        this.state = {
            loggedIn,
            username
        };
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Navigate replace={true} to="/login" />;
        }
        return (
            <>
                <SideNavbar />
                <Conatiner>
                    <Wrapper>
                        <h1>Welcome <span style={{ background: `-webkit-linear-gradient(right, #0d0081, #710000)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> {this.state.username} </span> !!</h1>
                        <ButtonContainer>
                            <NavLink>
                                <StyledButton type="secondary">
                                    Continue
                                </StyledButton>
                            </NavLink>
                            <NavLink to="/addmember">
                                <StyledButton type="secondary">
                                    Register Nominee
                                </StyledButton>
                            </NavLink>
                        </ButtonContainer>
                    </Wrapper>
                </Conatiner>
            </>
        );
    }
}
