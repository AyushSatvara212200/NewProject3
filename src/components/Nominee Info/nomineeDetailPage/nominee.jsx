import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from '../../../Images/slant.png'
// import NdOne from "./ndOne";
import NdTwo from "./ndTwo";
import NdThree from "./ndThree";
import { useForm } from "react-hook-form";
import Pagination from '@mui/material/Pagination';
// import { AwesomeButton } from 'react-awesome-button';
import './button.css'
import axios from 'axios'

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
    top: 2%;
`
const StyledPagination = styled(Pagination)`
.css-lqq3n7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected{
    color: #0012ff !important;
    border: 1px solid rgb(0 26 255 / 50%);
    background-color: rgb(39 42 176 / 12%);
}
position: absolute;
bottom: 2%;
`



const Nominee = () => {
    const FormTitles = ["Nominee Details", "Upload Docs"];
    const [page, setPage] = useState(1);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const { nomineeName, nomineePhone } = data;
        if (nomineeName && nomineePhone) {
            axios.post("http://localhost:9000/nomineeDetail", data).then((res) => {
                alert(res.data.message);
            })
        } else {
            alert("invalid")
        }

    };

    const handleChange = (event, value) => {
        setPage(value);
    };

    const PageDisplay = () => {
        if (page === 1) {
            return <NdTwo register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit} />
        }
        else {
            return <NdThree register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit} />
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Wrapper>
                        <Heading>{FormTitles[page - 1]}</Heading>
                        <h2>{PageDisplay()}</h2>
                        {page === 2 ? <button className="btn" type="submit">Submit</button> : null}
                        <StyledPagination count={2} page={page} onChange={handleChange} variant="outlined" />
                    </Wrapper>
                </Container>
            </form>
        </>
    )
}


export default Nominee
