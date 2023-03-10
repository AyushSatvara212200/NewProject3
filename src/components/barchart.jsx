import React from "react";
import styled from "styled-components";
import backgroundImage from "../Images/poly.png";
import SideNavbar from "./sideNavbar";
import '@progress/kendo-theme-default/dist/all.css';
import data from "./barchartdata.json";
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeriesLabels,
} from '@progress/kendo-react-charts';


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
const [firstSeries, secondSeries, thirdSeries, fourthSeries] = [
    [100, 123, 234, 343],
    [120, 67, 231, 196],
    [45, 124, 189, 143],
    [87, 154, 210, 215],
];
const categories = ["2020", "2021", "2022", "2023"];

const [firstoneSeries, secondoneSeries, thirdoneSeries, fourthoneSeries] = [
    [35, 20, 15, 30],
    [40, 20, 15, 25],
    [45, 35, 5, 15],
    [12, 28, 20, 40],
];
const onecategories = ["Jan-Mar", "Apr-Jun", "July-Sept", "Oct-Dec"];


const barchart = () => {
    const pointColor = (point) => {
        let summary = point.dataItem.summary;
        if (summary) {
            return summary === "total" ? "#555" : "gray";
        }
        if (point.value > 0) {
            return "green";
        } else {
            return "red";
        }
    };
    return (
        <>
            <Container>
                <SideNavbar />
                <div className="col-8">
                    <div className="k-card">
                        <Chart style={{
                            width: 920,
                            height: 380,
                        }}>
                            <ChartTitle text="Yearly" />
                            <ChartCategoryAxis>
                                <ChartCategoryAxisItem categories={categories}>
                                    <ChartCategoryAxisTitle text="Transactions" />
                                </ChartCategoryAxisItem>
                            </ChartCategoryAxis>
                            <ChartSeries>
                                <ChartSeriesItem type="bar" gap={2} spacing={0.25} data={firstSeries} />
                                <ChartSeriesItem type="bar" data={secondSeries} />
                                <ChartSeriesItem type="bar" data={thirdSeries} />
                                <ChartSeriesItem type="bar" data={fourthSeries} />
                            </ChartSeries>
                        </Chart>
                    </div>
                </div>
                <div className="col-8">
                    <div className="k-card">
                        <Chart style={{
                             width: 920,
                             height: 380,
                        }}>
                            <ChartTitle text="Cash flow throughout the Year 2022" />
                            <ChartSeries>
                                <ChartSeriesItem
                                    type="waterfall"
                                    data={data}
                                    color={pointColor}
                                    field="amount"
                                    categoryField="period"
                                    summaryField="summary"
                                >
                                    <ChartSeriesLabels format="C0" position="insideEnd" />
                                </ChartSeriesItem>
                            </ChartSeries>
                            <ChartValueAxis>
                                <ChartValueAxisItem />
                            </ChartValueAxis>
                        </Chart>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default barchart;

