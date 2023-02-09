import React from 'react'
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
// import FormControl from '@mui/material/FormControl';

const StyledTextField = styled(TextField)({
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid rgba(0, 0, 0, 0.87) !important",
    },
    '& label.Mui-focused': {
        color: 'rgba(0, 0, 0, 0.87)',
    },
}
)

const Container = styled.div`
width: 600px !important;
     display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 20px !important;
`

const NdThree= ({ register }) => {
    return (
        <>
            <Container>
                <StyledTextField id="outlined-basic" variant="outlined" {...register("nomineeAadhar")}  label="Aadhar Card" InputLabelProps={{
                            shrink: true,
                        }}  type="file" fullWidth />
                <StyledTextField id="outlined-basic" variant="outlined" {...register("nomineeBirthCertificate")}  label="Birth Certificate" InputLabelProps={{
                            shrink: true,
                        }}  type="file" fullWidth />
                <StyledTextField id="outlined-basic" variant="outlined" {...register("nomineePanCard")}  label="Pan Card" InputLabelProps={{
                            shrink: true,
                        }}  type="file" fullWidth />
            </Container>
        </>
    )
}

export default NdThree;