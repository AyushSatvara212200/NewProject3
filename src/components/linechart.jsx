import React from "react";
import styled from "styled-components";
import backgroundImage from "../Images/poly.png";
import SideNavbar from "./sideNavbar";
import '@progress/kendo-theme-default/dist/all.css';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
} from '@progress/kendo-react-charts';
import { color } from "@mui/system";


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
  gap: 10px;
`;
// const Wrapper = styled.div`
//   width: 60%;
//   height: 85%;
//   font-size: 18px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: #cbdaffc2;
//   backdrop-filter: blur(5px);
//   border-radius: 20px;
//   gap: 25px;
//   font-family: "Maven Pro", sans-serif I !important;
// `;
// const Heading = styled.h1`
//   position: absolute;
//   top: 4%;
// `;
const categories = [2021, 2022, 2023];
const series = [
    {
        name: "General",
        data: [3.907, 7.943, 12.848],
    },
    {
        name: "Death Help",
        data: [4.743, 7.295, 7.175],
    },
    {
        name: "Maintenance",
        data: [0.21, 0.375, 1.161],
    },
    {
        name: "External Expenses X 100",
        data: [1.988, 2.733, 3.994],
    },
];

const twocategories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const twoseries = [
    {
        name: "General",
        data: [3.907, 7.943, 7.848, 2.42, 1.09, 3.54, 6.7, 3.56, 7.848, 2.42, 1.09, 3.54],
    },
    {
        name: "Death Help",
        data: [7.295, 7.175, 3.907, 7.943, 7.848, 2.42, 0.21, 0.375, 1.161, 3.23, 4.56, 6.53],
    },
    {
        name: "Maintenance",
        data: [0.21, 0.375, 1.161, 7.295, 2.42, 1.09, 3.54, 6.7, 3.56, 0.21, 0.375, 1.161],
    },
    {
        name: "External Expenses X 100",
        data: [1.988, 2.733, 3.994, 6.7, 3.56, 0.21, 0.375, 6.7, 3.56, 7.848, 2.42, 1.09],
    },
];


const linechart = () => {
    return (
        <>
            <Container>
                <SideNavbar />
                <div className="col-6">
                    <div className="k-card">
                        <Chart
                            style={{
                                width: 800,
                                height: 380,
                                backgroundColor:"blue"
                            }}
                        >
                            <ChartTitle text="Yearly" />
                            <ChartLegend position="top" orientation="horizontal" />
                            <ChartCategoryAxis>
                                <ChartCategoryAxisItem categories={categories} startAngle={45} />
                            </ChartCategoryAxis>
                            <ChartSeries>
                                {series.map((item, idx) => (
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
                 <div className="col-6">
                    <div className="k-card">
                        <Chart
                            style={{
                                width: 800,
                                height: 380,
                                backgroundColor:"blue"
                            }}
                        >
                            <ChartTitle text="Monthly" />
                            <ChartLegend position="top" orientation="horizontal" />
                            <ChartCategoryAxis>
                                <ChartCategoryAxisItem categories={twocategories} startAngle={45} />
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
            </Container>
        </>
    )
}

export default linechart;

