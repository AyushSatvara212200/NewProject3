import React, { Component } from "react";
import styled from "styled-components";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import image from "../../Images/poly.png";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router";

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
  justify-content: space-evenly;
  background-color: #ffffff63;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  gap: 25px;
  font-family: "Maven Pro", sans-serif I !important;
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
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
`;

export default class dashboard extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        let loggedIn = true;

        if (token === null) {
            loggedIn = false;
        }
        this.state = {
            token,
            username,
            loggedIn
        };


    }
    render() {
        if (this.state.loggedIn === false) {
            return <Navigate replace={true} to="/" />;
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
                        <h1>Welcome <span style={{ background: `-webkit-linear-gradient(right, #0d0081, #710000)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> {this.state.username} </span> !!</h1>
                        <h3>This is a Nominee Detail for Community .</h3>
                    </Wrapper>
                </Conatiner>
            </>
        );
    }
}
