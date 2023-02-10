import React, { Component, useState } from "react";
import styled from "styled-components";
import image from "../Images/mountLight.png";
import TextField from "@mui/material/TextField";
import { NavLink, useNavigate } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../redux/reducers/auth/actions";

//STYLED COMPONENTS

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
  height: 60%;
  background-color: #ffffffa9;
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const LogContainer = styled.div`
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-weight: 600;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledTextfield = styled(TextField)`
  width: 70%;
  background-color: transparent;
  input:-webkit-autofill {
    -webkit-background-clip: text;
  }
  /* :active{
    background-color: transparent;
  }
  :focus{
    background-color: transparent;
  } */
`;
const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Urbanist", sans-serif;
`;
const StyledButton = styled(AwesomeButton)`
  width: 30%;
  font-family: "Urbanist", sans-serif !important;
  font-weight: bold !important;
  font-size: 15px;
`;
const SimpleText = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 300;
`;

// import React from 'react'

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);
  const [phone, setphone] = useState("9574952267");
  const [password, setpassword] = useState("Test@123!");
  // const [phone, setphone] = useState('')

  const onChangeHandle = (e) => {
    e.preventDefault();
    // this.setState({
    //   ...this.state,
    //   [e.target.name]: e.target.value,
    // });

    if (e.target.name === "phone") {
      setphone(e.target.value);
    }

    if (e.target.name === "password") {
      setpassword(e.target.value);
    }
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    // const { phone, password } = this.state;
    if (phone && password) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/auth/login`,
          {
            phone,
            password,
          },
          {
            // headers: {},
          }
        )
        .then((res) => {
          // alert(res.data.message);
          console.log(res.data);
          if (res.data.token && res.data.user) {
            dispatch(authActions.setUserData(res.data.token, res.data.user));
            navigate("/mainpage");
          }
        });
    } else {
      alert("Invalid");
    }
  };

  // if (loggedIn) {
  //   return <Navigate replace to="/mainpage" />;
  // }

  return (
    <>
      {/* {console.log(this.state.phone)} */}
      <Container>
        <Wrapper>
          <LogContainer>Log In</LogContainer>

          {/* Input Container */}

          <InputContainer>
            <StyledTextfield
              id="outlined-basic"
              type="text"
              label="Phone"
              variant="outlined"
              size="small"
              name="phone"
              value={phone}
              onChange={onChangeHandle}
            />
            <StyledTextfield
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
              size="small"
              autoComplete="current-password"
              name="password"
              value={password}
              onChange={onChangeHandle}
            />
          </InputContainer>

          {/* Button Container */}

          <ButtonContainer>
            <StyledButton variant="contained" onPress={onSubmitHandle}>
              Submit
            </StyledButton>
          </ButtonContainer>

          {/* Simple Text */}

          <SimpleText>
            Don't have an account?&nbsp;
            <NavLink
              to="/signup"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Sign Up
            </NavLink>
          </SimpleText>
        </Wrapper>
      </Container>
    </>
  );
}

// class login extends Component {
//   constructor(props) {
//     super(props);
//     //variables
//     let loggedIn = true;
//     const token = localStorage.getItem("token");

//     //Conditions
//     if (token === null) {
//       loggedIn = false;
//     }
//     this.state = {
//       phone: "9574952267",
//       password: "Test@123!",
//       loggedIn,
//     };

//     this.onChangeHandle = this.onChangeHandle.bind(this);
//     this.onSubmitHandle = this.onSubmitHandle.bind(this);
//   }

//   render() {

//   }
// }

// export default ();
