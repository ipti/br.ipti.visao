import React, { createContext } from "react";
import { PrivateRouterState } from "./state";

export const PrivateRouterContext = createContext({});

const PrivateRouterProvider = ({ children }) => {
   
    const {user, isAdmin, isTriador, isMedico} = PrivateRouterState()

    return (
        <PrivateRouterContext.Provider
            value={{
                user,
                isAdmin,
                isTriador,
                isMedico
            }}>
            {children}
        </PrivateRouterContext.Provider>
    )
}

export default PrivateRouterProvider;