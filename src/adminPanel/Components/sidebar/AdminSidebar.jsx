import { useContext, useState } from "react";
import { AdminContextProvide } from "../../Context_API/ContextProvider";
import AdminHeaderStore from "../../AdminDataStore/AdminHeaderStore";
import ItemLinks from "./ItemLinks";


const AdminSidebar = ()=>{
  const {adminNavData} = useContext(AdminContextProvide);
    return(
        <>
        <div className={`h-screen w-64 bg-[#222d32] px-3 text-white overflow-x-hidden overflow-y-scroll`}>
          <div className="text-xl py-3 font-bold border-b border-gray-700 flex items-center justify-between">
            <span className="">Admin CMS</span>
            <span className="w-fit material-icons">app_registration</span>
          </div>
          <nav>
              {
                adminNavData.map(({id,title,sublinks,to,icon})=>{
                 return <ItemLinks key={id} id={id} title={title} sublinks={sublinks} icon={icon} to={to}/>
                  })
              }
          </nav>
        </div>
        <div>
          
        </div>
        <AdminHeaderStore/>
        </>
        
    )
}

export default AdminSidebar;