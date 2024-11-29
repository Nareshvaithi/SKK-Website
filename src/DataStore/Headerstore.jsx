import { useEffect, useContext } from "react";
import { ContextProvide } from "../Context_API/contextProvider";

const Headerdata = () => {
    const {setNavbarData} = useContext(ContextProvide);
    useEffect(() => {
        const data = [
            { id: 1, title: "Home", to: "/" },
            { id: 2, title: "About", to: "/about", sublinks: [
            { id: 1, label: "Our Studio", to: "" },
            { id: 2, label: "About Gurus", to: "" },
            { id: 3, label: "Environment", to: "" },
            { id: 4, label: "The Founder", to: "" },
        ]},
        { id: 3, title: "Gallery", to: "/gallery", sublinks: [
            { id: 1, label: "Class", to: "" },
        ]},
        { id: 4, title: "Courses", to: "/courses", sublinks: [
            { id: 1, label: "Production", to: "" },
        ]},
        { id: 5, title: "Events", to: "/events", sublinks: [
            { id: 1, label: "Press Release", to: "" },
        ]},
        { id: 6, title: "Blogs", to: "/blogs", sublinks: [
            { id: 1, label: "Press Release", to: "" },
        ]},
        { id: 7, title: "Faq", to: "/faq" },
        { id: 8, title: "Contact", to: "/contact" },
        ];
        setNavbarData(data);
    }, [setNavbarData]);

    return null;
};


export default Headerdata;



