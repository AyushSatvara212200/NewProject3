import React from 'react';
import SideNavbar from "../components/sideNavbar";
import styled from "styled-components";
import image from "../Images/poly.png";
import UserImage from "../Images/userIconImage.png";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  overflow-y: auto;
  position: relative;
`
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  font-family: "Maven Pro", sans-serif I !important;
  gap: 20px;
`;
const TitleWrap = styled.div`
  width: 100%;
  /* padding-top: 20px; */
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 999;
  backdrop-filter: blur(10px);
  gap:300px;
`;
const SearchBar = styled.div`
  width: 400px;
  height: 60px;
  background-color: #00068163;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyledTextField = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 30px;
  border: none;
  padding-left: 10px;
`;
const ListView = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


const transactions = () => {
    const transaction = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',
    }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];

    return (
        <>
            <SideNavbar />
            <Container>
                <Wrapper>

                    <TitleWrap>

                        <h1 style={{ fontSize: "40px", color: "#000f4d", fontWeight: "bolder" }}>
                            Transactions
                        </h1>
                        <SearchBar>
                            <StyledTextField type="search" placeholder="Search" />
                            <SettingsIcon
                                style={{ width: "40px", height: "40px", color: "#b4b4b4" }}
                            />
                            <NavLink to="/account/personal"><img src={UserImage} style={{ width: "40px", height: "40px", borderRadius: "50%" }} alt="" /></NavLink>
                        </SearchBar>
                    </TitleWrap>
                </Wrapper>
                <ListView>
                    <p>{transaction.name}</p>
                </ListView>
            </Container>
        </>
    )
}

export default transactions;