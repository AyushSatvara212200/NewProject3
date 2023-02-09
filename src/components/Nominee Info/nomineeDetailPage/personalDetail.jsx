import React from 'react';
import NdOne from "./ndOne";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import backgroundImage from '../../../Images/slant.png'
import './button.css';
import SideNavbar from '../../sideNavbar';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
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
  height: 85%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #cbdaffc2;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  gap: 25px;
  font-family: "Maven Pro", sans-serif I !important;
`;
const Heading = styled.h1`
    position: absolute;
    top: 2%;
`
const onSubmit = (data) => {
    console.log(data);
}

const PersonalDetail = ({data}) => {
    const { register, handleSubmit } = useForm();
    return (
        <>
        <SideNavbar/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Wrapper>
                        <Heading>Personal Detail</Heading>
                        <h2>{<NdOne register={register} data={data}/>}</h2>
                        <button className="btn" type='submit'>Submit</button>
                    </Wrapper>
                </Container>
            </form>
        </>
    )
}

export default PersonalDetail