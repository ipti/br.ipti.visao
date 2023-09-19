import React, { createContext } from "react";
import FormRegistrationState from "./state";

export const FormRegistrationContext = createContext({});

const FormRegistrationProvider = ({ children }) => {

    const { initialValues, oneRegistration, SaveValues, handleUpdate, points } = FormRegistrationState()

    return (
        <FormRegistrationContext.Provider value={{ initialValues, oneRegistration, SaveValues,handleUpdate, points  }}>
            {children}
        </FormRegistrationContext.Provider>
    )
}

export default FormRegistrationProvider;