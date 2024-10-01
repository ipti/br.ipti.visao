import React, { createContext } from "react";
import FormRegistrationState from "./state";

export const FormRegistrationContext = createContext({});

const FormRegistrationProvider = ({ children }) => {

    const { initialValues, oneRegistration, SaveValues, handleUpdate, points, activeIndex, setActiveIndex } = FormRegistrationState()

    return (
        <FormRegistrationContext.Provider value={{ initialValues, oneRegistration, SaveValues,handleUpdate, points, activeIndex, setActiveIndex  }}>
            {children}
        </FormRegistrationContext.Provider>
    )
}

export default FormRegistrationProvider;