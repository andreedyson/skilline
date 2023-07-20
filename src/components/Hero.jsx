import { hero } from "../assets/assetsData";
import { HiMiniPlay } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="max-w-[2000px] mx-auto bg-light-orange px-6 py-4 lg:px-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 place-items-center">
            {/* Hero Text */}
            <div className="flex flex-col items-center gap-4 lg:gap-8 lg:items-start">
                <h1 className="max-w-[680px] text-navy-blue font-bold text-center lg:text-start text-3xl md:text-4xl lg:text-[54px]/normal"><span className="text-main-orange">Studying</span> Online is now much easier</h1>
                <p className="max-w-[330px] text-base text-center text-gray-text lg:text-start md:text-lg lg:text-xl md:max-w-[500px] ">Skilline is an interesting platform that will teach you in more an interactive way</p>
                <div className="flex flex-col items-center gap-4 font-medium md:flex-row md:items-start md:gap-8">
                    <button className="w-[140px] h-[50px] bg-main-orange rounded-full text-white duration-200 ease-in-out hover:bg-main-orange/60">Join for free</button>
                    <button className="inline-flex items-center duration-200 ease-in-out group hover:text-aqua-blue">
                        <div className="p-3 mr-4 duration-200 ease-in-out bg-white rounded-full shadow-md group-hover:bg-aqua-blue"><HiMiniPlay size={30} className="text-aqua-blue group-hover:text-white"/></div>  
                        Watch how it works
                    </button>
                </div>
            </div>
            {/* Hero Image */}
            <div>
                <img src={hero} alt="heroImage" />
            </div>    
        </div>
    </section>
  )
};

export default Hero;