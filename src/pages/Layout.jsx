import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import ResponsiveNav from "../components/header/ResponsiveNav";


const Layout = ()=>{
 
    return(
        <div>
            <Navbar/>
            <ResponsiveNav/>
            <Outlet/>
        </div>
    )
}

export default Layout;