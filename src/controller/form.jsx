import React, { useState } from 'react'
import styled from "styled-components";
import image from "../Images/mountLight.png";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Login from '../components/login';
// import { Navigate } from 'react-router-dom';


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
`
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


function Form() {
    const { register, handleSubmit } = useForm();
    const [loggedIn, setLoggedIn] = useState(false)

    

    const onSubmit = object => {
        const { phone, password } = object;
        if (phone && password) {
            axios.post("http://localhost:9000/login", object).then((res) => {
                // alert(res.data.message);
                console.log(res.data.found.username);
                if (res.data.found) {
                    localStorage.setItem("token", "abcdefghijklmnopqrstuvwxyz7s78df7sdfhdf87df8sdftshbdgfuys");
                    localStorage.setItem("username", res.data.found.username)
                    setLoggedIn(true);
                }
            })
        } else {
            alert("Invalid")
        }

    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Wrapper>
                        <LogContainer >Log In</LogContainer>

                        {/* Input Container */}

                        <InputContainer >
                            <StyledTextfield
                                id="outlined-basic"
                                type="text"
                                label="Phone"
                                variant="outlined"
                                size="small"
                                {...register("phone")}
                            />

                            <StyledTextfield
                                id="outlined-basic"
                                type="password"
                                label="Password"
                                variant="outlined"
                                size="small"
                                autoComplete="current-password"
                                {...register("password")}
                            />
                        </InputContainer>

                        {/* Button Container */}

                        <ButtonContainer type='submit'>
                            <StyledButton variant="contained"   >Submit</StyledButton>
                        </ButtonContainer>

                        {/* Simple Text */}

                        <SimpleText>
                            Don't have an account?&nbsp;
                            <NavLink
                                to="/signup"
                                style={{ textDecoration: "none", color: "blue" }}>
                                Sign Up
                            </NavLink>
                        </SimpleText>

                    </Wrapper>
                </Container>
            </form>
        </>
    )
}

export default Form;