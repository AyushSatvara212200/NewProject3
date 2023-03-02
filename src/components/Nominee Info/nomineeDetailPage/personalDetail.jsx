import React, { useEffect } from "react";
import NdOne from "./ndOne";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import backgroundImage from "../../../Images/slant.png";
import "./button.css";
import SideNavbar from "../../sideNavbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../../redux/reducers/auth/actions";

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
  top: 4%;
`;
const onSubmit = (data) => {
  console.log(data);
};

const PersonalDetail = ({ data }) => {
  const dispatch = useDispatch();
  const { token, userdata } = useSelector((state) => state.auth);
  const { register, handleSubmit } = useForm();
  // const [first, setfirst] = useState(second)

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Wrapper>
            <Heading>Personal Detail</Heading>
            <h2>{<NdOne register={register} data={data} />}</h2>
            <div>
              {/* {Object.keys(userdata).map((key) => {
                return <p key={key}>{`${key}: ${userdata[key]}`}</p>;
              })} */}
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </Wrapper>
        </Container>
      </form>
    </>
  );
};

export default PersonalDetail;
