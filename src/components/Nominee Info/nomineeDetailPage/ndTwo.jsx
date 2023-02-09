import React from 'react'
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const StyledTextField = styled(TextField)({
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid rgba(0, 0, 0, 0.87) !important",
    },
    '& label.Mui-focused': {
        color: 'rgba(0, 0, 0, 0.87)',
    },
}
)

const GenderContainer = styled(FormControl)`
    width: 100% !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 40px !important;
`
const Container = styled.div`
width: 600px !important;
     display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 20px !important;
`

const NdTwo = ({ register }) => {

    return (
        <>
            <Container>
               
                <StyledTextField
                    id="outlined-basic" style={{ width: "500px !important" }} fullWidth label="Name" variant="outlined" {...register("nomineeName")}
                />
                <GenderContainer>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel {...register("nomineeGender")} value="female" control={<Radio />} label="Female" />
                        <FormControlLabel {...register("nomineeGender")} value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </GenderContainer>

                <StyledTextField id="outlined-basic" fullWidth label="Relation" variant="outlined" type="email" {...register("nomineeRelation")} />
                <StyledTextField id="outlined-basic" fullWidth label="Email Address" variant="outlined" type="email" {...register("nomineeEmail")} />
                <StyledTextField id="outlined-basic" fullWidth label="Phone Number" variant="outlined" type="phone" {...register("nomineePhone")} />
                <StyledTextField id="outlined-multiline-static" fullWidth multiline
                    rows={4} label="Address" variant="outlined" type="text" {...register("nomineeAddress")} />
            </Container>
        </>
    )
}

export default NdTwo