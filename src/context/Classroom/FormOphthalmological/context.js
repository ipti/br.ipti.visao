import React, { createContext } from "react";
import FormRegistrationState from "./state";

export const FormRegistrationContext = createContext({});

const FormRegistrationProvider = ({ children }) => {

    const { initialValues, oneRegistration, updateInitialValues } = FormRegistrationState()

    return (
        <FormRegistrationContext.Provider value={{ initialValues, oneRegistration, updateInitialValues }}>
            {children}
        </FormRegistrationContext.Provider>
    )
}

export default FormRegistrationProvider;