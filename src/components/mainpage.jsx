import React, { Component } from "react";
import { Navigate } from "react-router";
import styled from "styled-components";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { NavLink } from "react-router-dom";
import image from "../Images/poly.png";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";

const Conatiner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
  justify-content: center;
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
const StyledButtonSec = styled(AwesomeButton)`
  width: 100px;
  height: 60px;
  font-family: "Urbanist", sans-serif !important;
  font-weight: 800 !important;
  font-size: 20px !important;
  --button-secondary-color: #001e57;
  --button-secondary-color-hover: #001e57;
  --button-secondary-color-active: #001e57;
  margin-right: 30px;
`;
const DashBoard = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 10px;
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
            return <Navigate to="/login" />;
        }
        return (
            <>
                <Conatiner>
                    <DashBoard>
                        <NavLink to="/">
                            <StyledButtonSec type="secondary">
                                <LogoutIcon />
                            </StyledButtonSec>
                        </NavLink>
                    </DashBoard>
                    <Wrapper>
                        <h1>Welcome  {this.state.username} </h1>
                        <ButtonContainer>
                            <StyledButton type="secondary">
                                Continue
                            </StyledButton>
                            <StyledButton type="secondary">
                                Register Nominee
                            </StyledButton>
                        </ButtonContainer>
                    </Wrapper>
                </Conatiner>
            </>
        );
    }
}
