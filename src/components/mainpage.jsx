import React, { Component } from "react";
import { Navigate } from "react-router";
import styled from "styled-components";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { NavLink } from "react-router-dom";
import image from "../Images/poly.png";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import SideNavbar from "./sideNavbar";
import { useSelector } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import data from "./donutChartData.json";
import "@progress/kendo-theme-default/dist/all.css";
import ChartImage from "../Images/bar-chart.png"
import RupeeImage from "../Images/rupee.png"
import SumImage from "../Images/the-sum-of.png"
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
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 999;
  backdrop-filter: blur(5px);
`;
const SearchBar = styled.div`
  width: 400px;
  height: 60px;
  background-color: #6ebafc76;
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

const twocategories = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const twoseries = [
  {
    name: "General",
    data: [
      3.907, 7.943, 7.848, 2.42, 1.09, 3.54, 6.7, 3.56, 7.848, 2.42, 1.09, 3.54,
    ],
  },
  {
    name: "Death Help",
    data: [
      7.295, 7.175, 3.907, 7.943, 7.848, 2.42, 0.21, 0.375, 1.161, 3.23, 4.56,
      6.53,
    ],
  },
  {
    name: "Maintenance",
    data: [
      0.21, 0.375, 1.161, 7.295, 2.42, 1.09, 3.54, 6.7, 3.56, 0.21, 0.375,
      1.161,
    ],
  },
  {
    name: "External Expenses X 100",
    data: [
      1.988, 2.733, 3.994, 6.7, 3.56, 0.21, 0.375, 6.7, 3.56, 7.848, 2.42, 1.09,
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
          <h1 style={{ fontSize: "40px", color: "lightblue" }}>
            Main Dashboard
          </h1>
          <SearchBar>
            <StyledTextField type="search" placeholder="Search" />
            <SettingsIcon
              style={{ width: "40px", height: "40px", color: "#b4b4b4" }}
            />
            <AccountCircleIcon
              style={{ width: "40px", height: "40px", color: "#cfe4ff" }}
            />
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
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
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
                  <ChartTitle text="Expense Distribution" />
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
        </InnerContainer>
      </Container>
    </>
  );
}
