import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image from "../../Images/poly.png";
import SideNavbar from "../sideNavbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../redux/reducers/auth/actions";
import UserImage from "../../Images/user-logo.jpeg"

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
  width: 700px;
  height: 500px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  background-color: #ffffff63;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  font-family: "Maven Pro", sans-serif I !important;
`;
const Division = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;
`
const Para = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
const AccountShowDetail = () => {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const { token, userdata } = useSelector((state) => state.auth);
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
  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/user/me`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        if (data._id) {
          dispatch(authActions.setUser(data));
        }
        // console.log("data", data);
      } catch (error) {
        console.log("error", error);
      }
    };

    getProfile();
  }, [dispatch, token]);
  return (
    <>
      <SideNavbar />
      <Container>
        <Wrapper>
          <h1 style={{ marginTop: "10px" }}>Personal Details</h1>
          {/* {user.map((userObj) => (
            <ul>
              <li>{userObj.nomineeName}</li>
              <li>{userObj.nomineeGender}</li>
              <li>{userObj.nomineeRelation}</li>
              <li>{userObj.nomineeEmail}</li>
              <li>{userObj.nomineePhone}</li>
              <li>{userObj.nomineeAddress}</li>
            </ul>
          ))} */}
          {/* {Object.keys(userdata).map((key) => {
                return <p key={key}>{`${key}: ${userdata[key]}`}</p>;
              })} */}
          <Division>
            <img src={UserImage} style={{ width: "100px", height: "100px", borderRadius: "20px", marginTop: "30px" }} alt="" />
            <Para><h4>Name :</h4>{Object.values(userdata.firstName)}&nbsp;{Object.values(userdata.lastName)}</Para>
            <Para><h4>Email Address :</h4>{Object.values(userdata.email)}</Para>
            <Para><h4>Phone Number :</h4>{Object.values(userdata.phone)}</Para>
          </Division>
        </Wrapper>
      </Container>
    </>
  );
};

export default AccountShowDetail;
