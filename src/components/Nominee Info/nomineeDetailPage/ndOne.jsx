import React from "react";
import { useEffect } from "react";
// import { useForm } from 'react-hook-form';
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from '@mui/material/FormLabel';

const StyledTextField = styled(TextField)({
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid rgba(0, 0, 0, 0.87) !important",
  },
  "& label.Mui-focused": {
    color: "rgba(0, 0, 0, 0.87)",
  },
});

const NameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const GenderContainer = styled(FormControl)`
  width: 100% !important;
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 40px !important;
`;
const Container = styled.div`
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 20px !important;
`;

const NdOne = ({ register }) => {
  return (
    <>
      <Container>
        <NameContainer>
          <StyledTextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            {...register("nomineeUserName")}
            className="textfield"
          />
          <StyledTextField
            id="outlined-basic"
            label="Father Name"
            variant="outlined"
            {...register("nomineeUserFathername")}
          />
          <StyledTextField
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            {...register("nomineeUserSurname")}
          />
        </NameContainer>
        <GenderContainer>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              {...register("nomineeUserGender")}
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              {...register("nomineeUserGender")}
              value="male"
              control={<Radio />}
              label="Male"
            />
          </RadioGroup>
          <StyledTextField
            id="outlined-basic"
            fullWidth
            label="Birthdate"
            variant="outlined"
            type="date"
            {...register("nomineeUserBirthdate")}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GenderContainer>

        <StyledTextField
          id="outlined-basic"
          fullWidth
          label="Email Address"
          variant="outlined"
          type="email"
          {...register("nomineeUserEmail")}
        />
        <StyledTextField
          id="outlined-basic"
          fullWidth
          label="Phone Number"
          variant="outlined"
          type="phone"
          {...register("nomineeUserPhone")}
        />
        <StyledTextField
          id="outlined-basic"
          fullWidth
          label="Native Place"
          variant="outlined"
          type="text"
          {...register("nomineeUserNativePlace")}
        />
      </Container>
    </>
  );
};

export default NdOne;
