import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";

// Components
import { useContext } from "react";
import { RegistrationContext } from "../../containers/Registration/Context/context";
import Classroom from "./ClassRoom";
import Finish from "./Finish";
import Quiz from "./Quiz";
import Start from "./Start";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepSix from "./StepSix";
import StepThree from "./StepThree";


const Wizard = props => {

  const nextStep = step => {
    props.next(step);
  };

  const { isOfLegalAge } = useContext(RegistrationContext);
  
  const componentMapping = {
    "0": Start,
    "1": Classroom,
    "2": StepOne,
    "3": StepThree,
    "4": isOfLegalAge === '1' ? StepFour : StepSix,
    "5": Quiz,
    "6": Finish
  };

  const StepComponent = componentMapping[props.step];


  return (
    <Grid item xs={12}>
      <StepComponent {...props} nextStep={nextStep} />
    </Grid>
  );

}



export default Wizard;
