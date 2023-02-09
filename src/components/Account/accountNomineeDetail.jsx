import React from 'react';
import styled from "styled-components";
import image from "../../Images/poly.png";
import SideNavbar from '../sideNavbar';

const Container = styled.div`
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

const AccountNomineeDetail = () => {
    return (
        <>
            <SideNavbar />
            <Container>
                <Wrapper>
                    Nominee Detail
                </Wrapper>
            </Container>
        </>
    )
}

export default AccountNomineeDetail