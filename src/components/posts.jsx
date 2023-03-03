import React from 'react';
import SideNavbar from "../components/sideNavbar";
import styled from "styled-components";
import image from "../Images/poly.png";
import UserImage from "../Images/userIconImage.png";
import UserImage1 from "../Images/cartoon1.jpg";
import UserImage2 from "../Images/cartoon2.jpeg";
import UserImage3 from "../Images/cartoon3.jpg";
import UserImage4 from "../Images/cartoon4.jpg";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';

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
  position: relative;
  overflow: hidden;
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
  position: relative;
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
const PostsDivision = styled.div`
width: 90%;
height: 90%;
overflow-y: auto;
margin-left: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
position: absolute;
top: 10%;
::-webkit-scrollbar{
    display: none;
}
`
const PostsData = styled.div`
width: 95%;
height: 150px;
background-color: #cbdaffc2;
  backdrop-filter: blur(5px);
border-radius: 20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`
const PostdataText = styled.div`
    width: 70%;
    height: 100%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`

const posts = () => {
    const posts = [{
        userImage: UserImage,
        userName: "Rowan",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "1/1/2020"
    }, {
        userImage: UserImage1,
        userName: "Jayden",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "12/5/2020"
    }, {
        userImage: UserImage2,
        userName: "Eliana",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "2/2/2021"
    }, {
        userImage: UserImage3,
        userName: "Liam",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "12/1/2023"
    }, {
        userImage: UserImage4,
        userName: "Suresh",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "2/2/2021"
    }, {
        userImage: UserImage,
        userName: "Rowan",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "1/1/2020"
    }, {
        userImage: UserImage3,
        userName: "Liam",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "2/2/2021"
    }, {
        userImage: UserImage1,
        userName: "Jayden",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "1/1/2020"
    }, {
        userImage: UserImage2,
        userName: "Eliana",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "12/1/2023"
    }, {
        userImage: UserImage3,
        userName: "Liam",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "12/1/2023"
    }, {
        userImage: UserImage4,
        userName: "Suresh",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "12/1/2023"
    }, {
        userImage: UserImage,
        userName: "Rowan",
        userInfo: "Lorem ipsum  Obcaecati delectus itaque fuga magnam hic, provident dolores dignissimos sint voluptate eum numquam sunt eos ratione consequuntur accusamus!",
        date: "2/2/2021"
    }]
    return (
        <>
            <SideNavbar />
            <Container>
                <Wrapper>

                    <TitleWrap>

                        <h1 style={{ fontSize: "40px", color: "#000f4d", fontWeight: "bolder" }}>
                            Posts
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
                <PostsDivision>
                    {posts.map((data) => {
                        return (
                            <>
                                <PostsData>
                                    <img src={data.userImage} style={{ width: "100px", height: "100px", borderRadius: "50%", marginLeft: "20px" }} alt="" />
                                    <PostdataText>
                                        <h3 style={{ marginTop: "0.5em", marginBottom: "0" }}>{data.userName}</h3>
                                        <p>{data.userInfo}</p>
                                        <p>{data.date}</p>
                                    </PostdataText>
                                    <ShareIcon style={{ width: "40px", height: "40px", cursor: "pointer" }} />
                                    <SendIcon style={{ width: "40px", height: "40px", cursor: "pointer" }} />
                                </PostsData>
                            </>
                        )
                    })}
                    {/* <PostsData>
                        <img src={UserImage} style={{ width: "100px", height: "100px", borderRadius: "50%", marginLeft: "20px" }} alt="" />
                        <PostdataText>
                            <h3>Some Information</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odio, et laboriosam fugit nesciunt recusandae praesentium, voluptate explicabo tenetur dolorem inventore perspicit culpa id!</p>
                            <p>Date</p>
                        </PostdataText>
                        <ShareIcon style={{width:"40px",height:"40px"}}/>
                        <SendIcon style={{width:"40px",height:"40px"}}/>
                    </PostsData> */}
                </PostsDivision>
            </Container>
        </>
    )
}

export default posts