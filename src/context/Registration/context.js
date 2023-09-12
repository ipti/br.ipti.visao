import React, { createContext } from "react";
import { RegistrationState } from "./state";

export const RegistrationContext = createContext({});

const RegistrationContextProvider = ({ children }) => {
    const {
        school,
        setSchool,
        idClassRoom,
        setIdClassroom,
        next,
        step,
        backStep,
        onSubmit,
        dataValues
    } = RegistrationState();

    return (
        <RegistrationContext.Provider
            value={{
                school,
                setSchool,
                idClassRoom,
                setIdClassroom,
                next,
                step,
                backStep,
                onSubmit,
                dataValues
            }}>
            {children}
        </RegistrationContext.Provider>
    )
}

export default RegistrationContextProvider;