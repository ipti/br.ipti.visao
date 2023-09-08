import React from "react";
import RegistrationContextProvider from "../Context/context";
import Home from "./Home";

const FormRegistration = () => {
    return(
        <RegistrationContextProvider>
            <Home />
        </RegistrationContextProvider>
    )
}

export default FormRegistration;