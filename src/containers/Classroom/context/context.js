import React from "react";
import { createContext } from "react";
import { StageState } from "./states";

export const StageContext = createContext({});

const StageContextProvider = ({ children }) => {

    const { classrooms, isLoadingSchools } = StageState();
    
    return (
        <StageContext.Provider value={{ classrooms, isLoadingSchools }}>
            {children}
        </StageContext.Provider>
    )
}

export default StageContextProvider;