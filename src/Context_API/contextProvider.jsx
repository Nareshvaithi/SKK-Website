import React, { createContext, useState } from "react";

export const ContextProvide = createContext();

export const Context = ({ children }) => {
    const [menu,setMenu] = useState(false);
    const [navbarData, setNavbarData] = useState([]);
    const [adminNavbarData,setAdminNavbarData] = useState([]);

    return (
        <ContextProvide.Provider value={{navbarData, setNavbarData, menu, setMenu}}>
            {children}
        </ContextProvide.Provider>
    );
};

export default Context;
