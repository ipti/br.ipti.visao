import React from "react";
import Home from "./Home";
import RegistrationContextProvider from "../../../context/Registration/context";

const FormRegistration = () => {
    return(
        <RegistrationContextProvider>
            <Home />
        </RegistrationContextProvider>
    )
}

export default FormRegistration;