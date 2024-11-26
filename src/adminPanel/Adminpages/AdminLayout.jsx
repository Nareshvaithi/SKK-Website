import { Outlet } from "react-router-dom";
import AdminSidebar from "../Components/sidebar/AdminSidebar";

const AdminLayout = ()=>{

    return(
        <div className="flex">
            <div>
                <AdminSidebar/>
            </div>
            <div className="bg-gray-300 w-full">
                <Outlet/>
            </div>
        </div>
    )
}

export default AdminLayout;