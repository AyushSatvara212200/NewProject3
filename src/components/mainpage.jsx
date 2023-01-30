import React, { Component } from 'react'
import { Navigate } from 'react-router';
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button';
import { NavLink } from 'react-router-dom';
import image from "../Images/poly.png";

const Conatiner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
const StyledButton = styled(AwesomeButton)`
  width: 200px;
  height: 60px;
  font-family: "Urbanist", sans-serif !important;
  font-weight: 800 !important;
  font-size: 20px !important;
  -button-primary-color: #002347;
`;

export default class mainpage extends Component {
    constructor(props) {
        super(props);
        let loggedIn = true
        const token = localStorage.getItem("token")

        if (token === null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if (this.state.loggedIn === false) {
            return <Navigate to="/login" />
        }
        return (
            <>
                <Conatiner>
                    <Wrapper>
                        <h1>Welcome to the Mainpage</h1>
                        <NavLink to="/">
                            <StyledButton type="primary">Log Out</StyledButton>
                        </NavLink>
                    </Wrapper>
                </Conatiner>
            </>
        )
    }
}
