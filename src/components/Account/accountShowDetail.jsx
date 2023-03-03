import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image from "../../Images/diamond-sunset.png";
import innerImage from "../../Images/subtle-prism.png"
import SideNavbar from "../sideNavbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../redux/reducers/auth/actions";
import UserImage from "../../Images/userIconImage.png";
import threedart from "../../Images/3dart.png";
import "../Nominee Info/nomineeDetailPage/button.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  /* gap: 100px; */
`;
const Wrapper = styled.div`
  width: 700px;
  height: 500px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${innerImage});
  justify-content: space-evenly;
  background-color: #ffffff63;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  font-family: "Maven Pro", sans-serif I !important;
`;
const Division = styled.div`

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 100px;
`
const Para = styled.div`
height: 200px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 20px;
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
        <img src={threedart} alt="" />
        <Wrapper>
          <h1 style={{ marginTop: "10px" }}>Personal Details</h1>
          <Division>
            <img src={UserImage} style={{ width: "200px", height: "180px", borderRadius: "20px" }} alt="" />
            <Para>
              <h3>{Object.values(userdata.firstName)}&nbsp;{Object.values(userdata.lastName)}</h3>
              <h4>{Object.values(userdata.email)}</h4>
              <h4>{Object.values(userdata.phone)}</h4>
            </Para>
          </Division>
          <button className="btn" type="submit">
            UPDATE
          </button>
        </Wrapper>
      </Container>
    </>
  );
};

export default AccountShowDetail;
