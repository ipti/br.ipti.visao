import { Grid } from "@mui/material";
import  React, { useContext } from "react";
import { RegistrationContext } from "../../context/Registration/context";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Termo from "./Start";

const Registration = () => {

    const { step } = useContext(RegistrationContext);
  
    return (
      <Grid item xs={12}>
        {step === 0 ?  <Termo /> :step === 1 ? <StepOne /> : step === 2 ? <StepTwo /> : null}
      </Grid>
    );
  }
  
  
  
  export default Registration;