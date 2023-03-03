import React, { Component } from "react";
// import { Navigate } from "react-router";
import styled from "styled-components";
// import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
// import { NavLink } from "react-router-dom";
import image from "../Images/poly.png";
// import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import SideNavbar from "./sideNavbar";
// import { useSelector } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import data from "./donutChartData.json";
import "@progress/kendo-theme-default/dist/all.css";
import ChartImage from "../Images/bar-chart.png"
import RupeeImage from "../Images/rupee.png"
import SumImage from "../Images/the-sum-of.png"
import folder from "../Images/folder.png"
import calendar from "../Images/calendar.png"
import expired from "../Images/expired.png"
import { Calendar } from "@progress/kendo-react-dateinputs";
import UserImage from "../Images/userIconImage.png";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Table from 'react-bootstrap/Table';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { NavLink } from "react-router-dom";


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
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: absolute;
  top: 15%;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
const CardOne = styled.div`
  width: 100%;
  height: 49%;
  background-color: transparent;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const ProductCard = styled.div`
  width: 400px;
  height: 150px;
  background-color: #f0f8ff58;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

`;
const CardTwo = styled.div`
  width: 100%;
  height: 49%;
  background-color: transparent;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const ChartSection = styled.div`
  width: 90%;
  height: 500px;
  background-color: #f0f8ff26;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const ChartSectionTable = styled.div`
  width: 90%;
  height: 500px;
  background-color: transparent;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledImage = styled.img`
  width: 60px;
  height: 60px;
  margin-left:20px;
`
const TextContainer = styled.div`
width: 250px;
height: 100px;
background-color: transparent;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 5px;
`
const Footer = styled.div`
  width: 1000px;
  height:50px;
  background-color: #f0f8ff26;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`
const rows = [
  createData('12/10/20', 159, 6.0, "Active"),
  createData('31/2/21', 237, 9.0, "Inactive"),
  createData('2/4/21', 262, 16.0, "Active"),
  createData('15/10/21', 305, 3.7, "Active"),
  createData('20/2/23', 356, 16.0, "Inactive"),
  createData('31/2/21', 237, 9.0, "Inactive"),
  createData('2/4/21', 262, 16.0, "Active"),
  createData('15/10/21', 305, 3.7, "Active"),
  createData('20/2/23', 356, 16.0, "Inactive"),
];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const twocategories = [
  "General",
  "Death Help",
  "Maintenance",
  "External Expenses",
  "Donation",

];
const twoseries = [
  {
    name: "Festival",
    data: [
      3.907, 7.943, 7.848, 2.42
    ],
  },
  {
    name: "Registration Fees",
    data: [
      7.295, 7.175, 3.907, 7.943, 0.566
    ],
  },
  {
    name: "Donation",
    data: [
      0.21, 0.375, 1.161, 7.295, 1.55
    ],
  },
  {
    name: "Death Help",
    data: [
      1.988, 2.733, 3.994, 6.7, 2.534
    ],
  },
  {
    name: "Other",
    data: [
      2.733, 6.7, 1.988, 2.733, 3.994
    ],
  },
];

export default function MainPage() {
  const labelContent = (e) => e.category;
  return (
    <>
      <SideNavbar />
      <Container>
        <TitleWrap>
          <h1 style={{ fontSize: "40px", color: "#000f4d", fontWeight: "bolder" }}>
            Main Dashboard
          </h1>
          <SearchBar>
            <StyledTextField type="search" placeholder="Search" />
            <SettingsIcon
              style={{ width: "40px", height: "40px", color: "#b4b4b4" }}
            />
            <NavLink to="/account/personal"><img src={UserImage} style={{ width: "40px", height: "40px", borderRadius: "50%" }} alt="" /></NavLink>
          </SearchBar>
        </TitleWrap>
        <InnerContainer>
          <Wrapper>
            <CardOne>
              <ProductCard style={{ gap: "20px" }}>
                <StyledImage src={ChartImage} alt="" />
                <TextContainer>
                  <p style={{ color: "#454545" }}>Expenses this Year</p>
                  <h1 style={{ fontSize: "40px" }}>₹ 3225</h1>
                </TextContainer>
              </ProductCard>
              <ProductCard>
                <StyledImage src={RupeeImage} alt="" />
                <TextContainer>
                  <p style={{ color: "#454545" }}>Expenses this Month</p>
                  <h1 style={{ fontSize: "40px" }}>₹ 445</h1>
                </TextContainer>
              </ProductCard>
              <ProductCard>
                <StyledImage src={SumImage} alt="" />
                <TextContainer>
                  <p style={{ color: "#454545" }}>Total Expenses</p>
                  <h1 style={{ fontSize: "40px" }}>₹ 3670</h1>
                </TextContainer>
              </ProductCard>
            </CardOne>
            <CardTwo>
              <ProductCard>
                <StyledImage src={calendar} alt="" />
                <TextContainer>
                  <p style={{ color: "#454545" }}>Next Date for Fees Pay</p>
                  <h1 style={{ fontSize: "40px" }}>Apr 15</h1>
                </TextContainer>
              </ProductCard>
              <ProductCard>
                <StyledImage src={expired} alt="" />
                <TextContainer>
                  <p style={{ color: "#454545" }}>Pending Transactions</p>
                  <h1 style={{ fontSize: "40px" }}>₹ 0</h1>
                </TextContainer>
              </ProductCard>
              <ProductCard>
                <StyledImage src={folder} alt="" />
                <TextContainer>
                  <p style={{ color: "#454545" }}>Total Transactions</p>
                  <h1 style={{ fontSize: "40px" }}>15</h1>
                </TextContainer>
              </ProductCard>
            </CardTwo>
          </Wrapper>
          <ChartSection>
            <div className="col-6">
              <div className="k-card">
                <Chart
                  style={{
                    width: 600,
                    height: 400,
                    backgroundColor: "blue",
                  }}>
                  <ChartTitle text="Expense Distribution Yearly" />
                  <ChartSeries>
                    <ChartSeriesItem
                      type="donut"
                      data={data}
                      categoryField="kind"
                      field="share">
                      <ChartSeriesLabels
                        color="#fff"
                        background="none"
                        content={labelContent}
                      />
                    </ChartSeriesItem>
                  </ChartSeries>
                  <ChartLegend visible={false} />
                </Chart>
              </div>
            </div>
            <div className="col-6">
              <div className="k-card">
                <Chart
                  style={{
                    width: 600,
                    height: 400,
                    backgroundColor: "blue",
                  }}>
                  <ChartTitle text="Monthly" />
                  <ChartLegend position="top" orientation="horizontal" />
                  <ChartCategoryAxis>
                    <ChartCategoryAxisItem
                      categories={twocategories}
                      startAngle={45}
                    />
                  </ChartCategoryAxis>
                  <ChartSeries>
                    {twoseries.map((item, idx) => (
                      <ChartSeriesItem
                        key={idx}
                        type="line"
                        tooltip={{
                          visible: true,
                        }}
                        data={item.data}
                        name={item.name}
                      />
                    ))}
                  </ChartSeries>
                </Chart>
              </div>
            </div>
          </ChartSection>
          <ChartSectionTable>
            <Calendar />
            <Table striped bordered hover variant="dark" style={{ width: "700px" }}>
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Date</th>
                  <th>Pending</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td>1</td>
                  <td>12/4/2020</td>
                  <td>₹ 300.00</td>
                  <td style={{ color: "red" }}>INACTIVE</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1/7/2020</td>
                  <td>₹ 200.00</td>
                  <td style={{ color: "green" }}>ACTIVE</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>12/2/2021</td>
                  <td>₹ 00.00</td>
                  <td style={{ color: "green" }}>ACTIVE</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>15/5/2022</td>
                  <td>₹ 1200.00</td>
                  <td style={{ color: "red" }}>INACTIVE</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>29/8/2022</td>
                  <td>₹ 100.00</td>
                  <td style={{ color: "green" }}>ACTIVE</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>9/9/2022</td>
                  <td>₹ 00.00</td>
                  <td style={{ color: "red" }}>INACTIVE</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>2/10/2022</td>
                  <td>₹ 250.00</td>
                  <td style={{ color: "green" }}>ACTIVE</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>20/12/2022</td>
                  <td>₹ 50.00</td>
                  <td style={{ color: "green" }}>ACTIVE</td>
                </tr>
              </tbody>
            </Table>
          </ChartSectionTable>
          <Footer>
            <span>© 2023 Project III . All Rights Reserved. Made with Hardwork</span>
            <span>Support</span>
            <span>License</span>
            <span>Terms of Use</span>
            <span>BLog</span>
          </Footer>
        </InnerContainer>
      </Container>
    </>
  );
}
