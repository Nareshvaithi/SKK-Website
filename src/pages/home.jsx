import AboutComp from "../components/home/about/AboutComp";
import Guruscopm from "../components/home/gurus/gurus";
import Hero from "../components/home/Hero/Hero";

const Home = ()=>{
    return(
        <div>
            <Hero/>
            <AboutComp/>
            <Guruscopm/>
        </div>
    )
}

export default Home;