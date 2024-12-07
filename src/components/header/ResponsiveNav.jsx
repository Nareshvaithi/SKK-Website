import { useContext } from "react"
import { ContextProvide } from "../../Context_API/contextProvider"
import { RiMenuUnfold2Line } from "react-icons/ri";
import Logo from "../../assets/Images/header/logo-SKK.png";
const ResponsiveNav = ()=>{
    const {menu,setMenu} = useContext(ContextProvide);
    console.log(menu)
    return(
        <div className={`w-full h-auto lg:h-screen z-[99999] bg-white fixed top-0 ${menu ? "transform translate-y-0" : "transform -translate-y-full"} transition-all duration-300 ease-linear`}>
            <div className="shadow-themebrown shadow-sm py-5">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="w-40">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div onClick={()=>setMenu(false)}>
                        <RiMenuUnfold2Line size={30}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ResponsiveNav;