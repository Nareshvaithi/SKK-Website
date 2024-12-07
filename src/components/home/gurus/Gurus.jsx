import axios from "axios";
import { useState } from "react";
import { Autoplay,Navigation } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
const Guruscomp = ()=>{
    const [gurus,setGurus] = useState([]);
    useState(()=>{
        const fetchGurus = async ()=>{
            const getGurus = await axios.get('http://localhost:3000/homegurus');
            setGurus(getGurus.data)
        }

        fetchGurus();
    },[])

    gurus.map(({_id,url})=>{
        console.log(url)
    })
    return(
        <div>
            <div className="container">
                <div className="text-center font-mainFont2 text-2`xl font-bold pb-5">
                    <h1>Our Gurus</h1>
                </div>
                <div>
                    <Swiper
                    modules={[Autoplay,Navigation]}
                    loop={true}
                    slidesPerView={4}
                    speed={500}
                    autoplay={
                        {delay:2000,disableOnInteraction:false}
                    }

                    >
                        {
                            gurus.map(({_id,name,about,url})=>(
                                <SwiperSlide>
                                    <div className="flex gap-5">
                                        <div>
                                            <div className="w-[300px] h-[300px]">
                                                <img className="w-full h-full" src={url} alt={name} />
                                            </div>
                                            <div className="text-center">
                                                <h1>{name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Guruscomp;