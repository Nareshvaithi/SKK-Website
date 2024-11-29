import axios from "axios";
import { useEffect, useState } from "react";

const AboutComp = ()=>{
    const [aboutImg,setAboutImg] = useState([]);
    useEffect(()=>{
        const fetchAboutImg = async ()=>{
            try{
                const getAboutImage = await axios.get("https://skk-backend.onrender.com/bannerabout");
                setAboutImg(getAboutImage.data);
            }
            catch(error){
                console.log(error)
            }
        }

        fetchAboutImg();
    },[])
    console.log(aboutImg);
    return(
        <div className="w-full h-auto">
           <div className="container mx-auto w-4/5">
            <div className="text-center font-mainFont2">
                <h1 className="text-2xl font-bold">Meet The Founder</h1>
                <p className="text-xl">The roots of Saraswathy Kala Kendra (SKK) were planted in 1967 by T Narayanamurthy and Meera Narayan in Perambur, with just three students embracing Bharathanatyam and Carnatic Music. In 1975, SKK took shape, blossoming into an institution with regular classes and a structured annual syllabus. This endeavor bore fruit, benefiting numerous students. From there, SKK’s popularity grew, resonating throughout Perambur and beyond.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-5 py-5">
            <div className="font-mainFont2 flex items-center">
                <div>
                    <p className="text-xl py-2">Salangai poojai, Arangetram, and captivating stage performances soon became our signature. The Government of Tamil Nadu recognized our dedication to the arts and honored us with state recognition in 1981. Meera Narayan's choreographic brilliance shone in productions like Krishna Leela, Dasavatharam, and Padmavathi Kalyanam, earning admiration from all corners. Her daughters, Kiran Mayee and Yagna Prabha, embraced the mantle of teaching at our institution.
                    </p>
                    <p className="text-xl">Our annual day programs witnessed visits from esteemed celebrities who extended their appreciation and support. Notable personalities including actors Kamal Haasan, Pandiya Rajan, Partheeban, Sasikumar, Radha Ravi, and actresses Sujatha, Gowthami, Rupini, Rekha, and Poornima Bhagyaraj, along with director KS Ravikumar and music director Gangai Amaran, graced our events.</p>
                </div>
            </div>
            <div className="w-full rounded-xl flex items-center">
                {
                    aboutImg.map(({_id,url})=>(
                        <img className="object-contain rounded-xl" key={_id} src={url} alt="" />
                    ))
                }
            </div>
            </div>
           </div>
        </div>
    )
}

export default AboutComp;