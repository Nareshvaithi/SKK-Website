import { createContext, useState } from "react";

export const AdminContextProvide = createContext();

const AdminContext = ({children})=>{
    const [adminNavData,setAdminNavData] = useState([]);
    const [openCMS,setOpenCMS] = useState(false);
    return(
        <AdminContextProvide.Provider value={{adminNavData,setAdminNavData}}>
            {children}
        </AdminContextProvide.Provider>
    )
}

export default AdminContext;