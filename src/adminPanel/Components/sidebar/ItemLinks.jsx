import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { AdminContextProvide } from "../../Context_API/ContextProvider";
const ItemLinks = ({id,title,sublinks,to,icon})=>{
    const [open,setOpen] = useState(false);
    
    return(
        <>
        <div className="">
        <ul>
            <li className="py-4 px-2 hover:bg-red-800" onClick={()=>{setOpen(!open)}}>
                <NavLink to={to} className={`${(isActive)=> isActive ? "text-red-500" : "text-white"} text-lg flex items-center justify-between`}>
                    <div className="flex items-center">
                        <span className="material-icons w-8 opacity-60">{icon}</span>
                        <span className="tracking-widest">{title}</span>
                    </div>
                    <span className={`${open ? 'rotate-180' : 'rotate-0'} transition-all duration-500`}><FaAngleDown/></span>
                </NavLink>
            </li>
        </ul>
        <ol className={`grid ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} transition-all duration-500 overflow-hidden`}>
            <div className="overflow-hidden py-1 pl-10 text-lg text-gray-200">
            {
               sublinks.length > 0 && sublinks.map(({id,label,to})=>(
                    <NavLink key={id} to={to} className={"block"}>{label}</NavLink>
                ))
            }
            </div>
        </ol>
        </div>
        </>
    )
}

export default ItemLinks;