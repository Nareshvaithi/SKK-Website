import React, { createContext, useState } from "react";

export const ContextProvide = createContext();

export const Context = ({ children }) => {
    const [navbarData, setNavbarData] = useState([]);
    const [adminNavbarData,setAdminNavbarData] = useState([]);

    return (
        <ContextProvide.Provider value={{navbarData, setNavbarData}}>
            {children}
        </ContextProvide.Provider>
    );
};

export default Context;
