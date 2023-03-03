import React from 'react';
import SideNavbar from "../components/sideNavbar";
import styled from "styled-components";
import image from "../Images/poly.png";
import UserImage from "../Images/userIconImage.png";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from 'react-router-dom';
import phonepe from "../Images/phonepe.png"
import paytm from "../Images/paytm.png"
import gpay from "../Images/google-paya.jpeg"
import mastercard from "../Images/MasterCard.png"


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
const ListView = styled.div`
width: 90%;
height: 630px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`
const TableDiv = styled.div`
width: 100%;
height: 100%;
position: relative;
overflow-y: scroll;
background-color: aliceblue;
::-webkit-scrollbar{
    display: none;
}
`


const transactions = () => {
    const transaction = [{
        mode: paytm,
        id: 1,
        date: '12/10/2020',
        paid: '₹ 200.00',
        pending: "₹ 00.00",
        status: "INACTIVE"
    }, {
        mode: phonepe,
        id: 2,
        date: '1/12/2020',
        paid: '₹ 100.00',
        pending: "₹ 200.00",
        status: "ACTIVE"
    }, {
        mode: mastercard,
        id: 3,
        date: '22/3/2021',
        paid: '₹ 1000.00',
        pending: "₹300.00",
        status: "INACTIVE"
    }, {
        mode: gpay,
        id: 4,
        date: '10/1/2022',
        paid: '₹ 1650.00',
        pending: "₹ 90.00",
        status: "INACTIVE"
    }, {
        mode: mastercard,
        id: 5,
        date: '2/12/2022',
        paid: '₹ 1890.00',
        pending: "₹00.00",
        status: "ACTIVE"
    },
    {
        mode: mastercard,
        id: 6,
        date: '12/10/2020',
        paid: '₹ 1200.00',
        pending: "₹300.00",
        status: "ACTIVE"
    }, {
        mode: phonepe,
        id: 7,
        date: '1/12/2020',
        paid: '₹ 140.00',
        pending: "₹ 00.00",
        status: "INACTIVE"
    }, {
        mode: paytm,
        id: 8,
        date: '22/3/2021',
        paid: '₹ 230.00',
        pending: "₹ 10.00",
        status: "ACTIVE"
    }, {
        mode: mastercard,
        id: 9,
        date: '10/1/2022',
        paid: '₹ 120.00',
        pending: "₹ 30.00",
        status: "INACTIVE"
    }, {
        mode: paytm,
        id: 10,
        date: '2/12/2022',
        paid: '₹ 200.00',
        pending: "₹ 00.00",
        status: "ACTIVE"
    },
    {
        mode: gpay,
        id: 11,
        date: '12/10/2020',
        paid: '₹ 900.00',
        pending: "₹ 00.00",
        status: "INACTIVE"
    }, {
        mode: mastercard,
        id: 12,
        date: '1/12/2020',
        paid: '₹ 800.00',
        pending: "₹ 100.00",
        status: "ACTIVE"
    }, {
        mode: paytm,
        id: 13,
        date: '22/3/2021',
        paid: '₹ 400.00',
        pending: "₹ 100.00",
        status: "INACTIVE"
    }, {
        mode: gpay,
        id: 14,
        date: '10/1/2022',
        paid: '₹ 120.00',
        pending: "₹ 30.00",
        status: "INACTIVE"
    }, {
        mode: phonepe,
        id: 15,
        date: '2/12/2022',
        paid: '₹ 300.00',
        pending: "₹ 00.00",
        status: "ACTIVE"
    },
    {
        mode: gpay,
        id: 16,
        date: '12/10/2020',
        paid: '₹ 620.00',
        pending: "₹ 30.00",
        status: "ACTIVE"
    }, {
        mode: phonepe,
        id: 17,
        date: '1/12/2020',
        paid: '₹ 500.00',
        pending: "₹ 220.00",
        status: "INACTIVE"
    }, {
        mode: paytm,
        id: 18,
        date: '22/3/2021',
        paid: '₹ 2000.00',
        pending: "₹ 150.00",
        status: "ACTIVE"
    }, {
        mode: gpay,
        id: 19,
        date: '10/1/2022',
        paid: '₹ 1000.00',
        pending: "₹ 00.00",
        status: "INACTIVE"
    }, {
        mode: mastercard,
        id: 20,
        date: '2/12/2022',
        paid: '₹ 450.00',
        pending: "₹ 40.00",
        status: "ACTIVE"
    }];

    return (
        <>
            <SideNavbar />
            <Container>
                <Wrapper>

                    <TitleWrap>

                        <h1 style={{ fontSize: "40px", color: "#000f4d", fontWeight: "bolder" }}>
                            Transactions
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
                <ListView>
                    <table class="table text-center table-striped table-dark table-borderless" >
                        <thead>
                            <tr>
                                <th scope="col">Sr No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Paid</th>
                                <th scope="col">Pending</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                    </table>
                    <TableDiv>
                        {
                            transaction.map((data) => {
                                return (
                                    <>
                                        <table class="table text-center table-striped table-borderless" >
                                            <tbody>
                                                <tr >
                                                    <img src={data.mode} style={{ width: "40px", height: "40px", padding: "0px" }} alt="" />
                                                    <td style={{ width: "245px", textAlign: "start", paddingLeft: "40px" }} scope="col">{data.id}</td>
                                                    <td style={{ width: "245px", textAlign: "start" }} scope="col">{data.date}</td>
                                                    <td style={{ width: "245px", textAlign: "start" }} scope="col">{data.paid}</td>
                                                    <td style={{ width: "245px", textAlign: "start", paddingLeft: "30px" }} scope="col">{data.pending}</td>
                                                    {data.status === "ACTIVE" ? <td style={{ width: "245px", padding: "8px", color: "green" }} scope="col">{data.status}</td> : <td style={{ width: "245px", padding: "8px", color: "red" }} scope="col">{data.status}</td>}
                                                    {/* <td style={{ width: "245px", padding: "8px" }} scope="col">{data.status}</td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </>
                                )
                            })
                        }
                    </TableDiv>
                </ListView>
            </Container>
        </>
    )
}

export default transactions;