import axios from "axios";
import { useEffect, useState } from "react";

const AboutComp = ()=>{
    const [aboutImg,setAboutImg] = useState([]);
    useEffect(()=>{
        const fetchAboutImg = async ()=>{
            try{
                const getAboutImage = await axios.get("http://localhost:3000/bannerabout");
                setAboutImg(getAboutImage.data);
            }
            catch(error){
                console.log(error)
            }
        }

        fetchAboutImg();
    },[])
    aboutImg.map(((items)=>{
        console.log(items.url)
    }));
    return(
        <div className="w-full h-auto py-10">
           <div className="container mx-auto w-full lg:w-4/5">
            <div className="text-center font-mainFont2">
                <h1 className="text-2xl font-bold">Meet The Founder</h1>
                <p className="text-lg pt-5">The roots of Saraswathy Kala Kendra (SKK) were planted in 1967 by T Narayanamurthy and Meera Narayan in Perambur, with just three students embracing Bharathanatyam and Carnatic Music. In 1975, SKK took shape, blossoming into an institution with regular classes and a structured annual syllabus. This endeavor bore fruit, benefiting numerous students. From there, SKK’s popularity grew, resonating throughout Perambur and beyond.
                </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 py-5">
            <div className="w-full lg:w-9/12 font-mainFont2">
                <div>
                    <h1 className="font-black">Founder name</h1>
                    <p className="font-semibold">style name</p>
                    <p className="text-lg pb-5">Salangai poojai, Arangetram, and captivating stage performances soon became our signature. The Government of Tamil Nadu recognized our dedication to the arts and honored us with state recognition in 1981. Meera Narayan's choreographic brilliance shone in productions like Krishna Leela, Dasavatharam, and Padmavathi Kalyanam, earning admiration from all corners. Her daughters, Kiran Mayee and Yagna Prabha, embraced the mantle of teaching at our institution.
                    </p>
                    <p className="text-lg">Our annual day programs witnessed visits from esteemed celebrities who extended their appreciation and support. Notable personalities including actors Kamal Haasan, Pandiya Rajan, Partheeban, Sasikumar, Radha Ravi, and actresses Sujatha, Gowthami, Rupini, Rekha, and Poornima Bhagyaraj, along with director KS Ravikumar and music director Gangai Amaran, graced our events.</p>
                </div>
            </div>
            <div className="w-full lg:w-3/12 rounded-xl">
                {
                    aboutImg.map(({_id,url})=>(
                        <img className="object-contain rounded-xl" key={_id} src={url} alt="" />
                    ))
                }
                {/* <div className="w-full h-full rounded-md shadow-xl shadow-black flex items-center justify-center">
                    founder image
                </div> */}
            </div>
            </div>
           </div>
        </div>
    )
}

export default AboutComp;