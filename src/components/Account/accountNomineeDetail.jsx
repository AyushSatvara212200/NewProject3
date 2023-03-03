import React from "react";
import styled from "styled-components";
import image from "../../Images/diamond-sunset.png";
import innerImage from "../../Images/subtle-prism.png"
import SideNavbar from "../sideNavbar";
import threedart from "../../Images/3dCartoonFamily.png";
import "../Nominee Info/nomineeDetailPage/button1.css";
import UserImage from "../../Images/userIconImage.png";

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
`;
const Wrapper = styled.div`
  width: 60%;
  height: 60%;
  font-size: 18px;
  background-image: url(${innerImage});
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
const Division = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
const Para = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const AccountNomineeDetail = () => {
    return (
        <>
            <SideNavbar />
            <Container>
                <img src={threedart} alt="" />
                <Wrapper>
                    <h1 style={{ marginTop: "10px" }}>Nominees Details</h1>
                    <Division>
                        <img
                            src={UserImage}
                            style={{ width: "200px", height: "180px", borderRadius: "20px" }}
                            alt=""
                        />
                        <Para>
                            <h3 style={{ color: "#8c0000" }}>No Nominees Added at the moment !!!</h3>
                            <button class="cssbuttons-io-button"> Add Nominee
                                <div class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                </div>
                            </button>
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

export default AccountNomineeDetail;
