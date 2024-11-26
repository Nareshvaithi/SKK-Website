import { useContext, useEffect } from "react"
import { AdminContextProvide } from "../Context_API/ContextProvider"

const AdminHeaderStore = ()=>{

    const {setAdminNavData} = useContext(AdminContextProvide);

    useEffect(()=>{
        const data = [
            {
              id: 1,
              title: "Home",
              to: "/adminlayout",
              sublinks: [
                { id: 1, label: "Banner Video", to: "/adminlayout" },
                { id: 2, label: "Shorts", to: "/adminlayout/editshorts" },
                { id: 3, label: "Banner Slider", to: "/adminlayout/editbannerslider" },
              ],
              icon:"roofing"
            },
            {
              id: 2,
              title: "About",
              to: "/about",
              sublinks: [
                { id: 1, label: "Our Studio", to: "" },
                { id: 2, label: "About Gurus", to: "" },
                { id: 3, label: "Environment", to: "" },
                { id: 4, label: "The Founder", to: "" },
              ],
              icon:"person_raised_hand"
            },
            {
              id: 3,
              title: "Gallery",
              to: "/gallery",
              sublinks: [
                { id: 1, label: "Class", to: "" },
              ],
              icon:"photo_library"
            },
            {
              id: 4,
              title: "Courses",
              to: "/courses",
              sublinks: [
                { id: 1, label: "Production", to: "" },
              ],
              icon:"play_lesson"
            },
            {
              id: 5,
              title: "Events",
              to: "/events",
              sublinks: [
                { id: 1, label: "Press Release", to: "" },
              ],
              icon:"emoji_events"
            },
            {
              id: 6,
              title: "Blogs",
              to: "/blogs",
              sublinks: [
                { id: 1, label: "Press Release", to: "" },
              ],
              icon:"inventory"
            },
            {
              id: 7,
              title: "Faq",
              to: "/faq",
              sublinks: [],
              icon:"quiz"
            },
            {
              id: 8,
              title: "Contact", 
              to: "/contact",
              sublinks: [],
              icon:"contact_support"
            },
          ];
          

            setAdminNavData(data);
    },[setAdminNavData])

    return null
}

export default AdminHeaderStore;