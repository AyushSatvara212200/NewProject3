import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image from "../../Images/poly.png";
import SideNavbar from "../sideNavbar";
import axios from "axios";

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

const AccountShowDetail = () => {
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/me`
      );

      console.log("user", data);
    } catch (error) {
      console.log(error);
    }
    // return fetch(`${process.env.REACT_APP_API_URL}/read`)
    //   .then((response) => response.json())
    //   .then((data) => setUser(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <SideNavbar />
      <Container>
        <Wrapper>
          Personal Detail
          {user.map((userObj) => (
            <ul>
              <li>{userObj.nomineeName}</li>
              <li>{userObj.nomineeGender}</li>
              <li>{userObj.nomineeRelation}</li>
              <li>{userObj.nomineeEmail}</li>
              <li>{userObj.nomineePhone}</li>
              <li>{userObj.nomineeAddress}</li>
            </ul>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default AccountShowDetail;
