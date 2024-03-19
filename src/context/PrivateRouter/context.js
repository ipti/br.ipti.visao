import React, { createContext } from "react";
import { PrivateRouterState } from "./state";

export const PrivateRouterContext = createContext({});

const PrivateRouterProvider = ({ children }) => {
   
    const {user} = PrivateRouterState()

    return (
        <PrivateRouterContext.Provider
            value={{
                user
            }}>
            {children}
        </PrivateRouterContext.Provider>
    )
}

export default PrivateRouterProvider;