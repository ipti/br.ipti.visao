import React, { createContext } from "react";
import FormRegistrationState from "./state";

export const FormRegistrationContext = createContext({});

const FormRegistrationProvider = ({ children }) => {

    const { initialValues, oneRegistration } = FormRegistrationState()

    return (
        <FormRegistrationContext.Provider value={{ initialValues, oneRegistration }}>
            {children}
        </FormRegistrationContext.Provider>
    )
}

export default FormRegistrationProvider;