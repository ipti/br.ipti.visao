import React from "react";
import FormRegistrationProvider from "../../../context/Classroom/FormOphthalmological/context";
import { RegistrationConfirmed } from "../../../screens/Classroom";

const Registration = props => {




  return (
    <>
      <FormRegistrationProvider>
        <RegistrationConfirmed
        />
      </FormRegistrationProvider>
    </>
  );
};

export default Registration;
