import { Grid } from "@mui/material";
import  React, { useContext } from "react";
import { RegistrationContext } from "../../context/Registration/context";
import StepOne from "./StepOne";

const Registration = () => {

    const { step } = useContext(RegistrationContext);
  
    return (
      <Grid item xs={12}>
        {step === 0 ? <StepOne /> : null}
      </Grid>
    );
  }
  
  
  
  export default Registration;