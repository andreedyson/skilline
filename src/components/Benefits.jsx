import Clients from "./Clients";
import { benefits } from "../data/data";

const Benefits = () => {
  return (
    <section className="max-w-[2000px] mx-auto px-6 py-8 lg:px-20">
        <div>
            {/* Clients Images */}
            <Clients />
            {/* Clients Benefits */}
            <div className="flex flex-col items-center gap-6 text-center">
                <h2 className="text-2xl font-bold text-navy-blue md:text-3xl lg:text-4xl">All In-One <span className="text-main-orange">Cloud Software</span></h2>
                <p className="max-w-[600px] text-base md:text-lg lg:text-xl">Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office</p>
                <div className="grid grid-cols-1 gap-12 mt-20 xl:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center px-6 py-12 shadow-2xl rounded-2xl">
                            <div className={` w-[100px] h-[100px] mb-10 flex items-center justify-center rounded-full 
                            ${index === 0 && "bg-purple-icon"} 
                            ${index === 1 && "bg-main-orange"} 
                            ${index === 2 && "bg-aqua-blue"}`}
                            >
                                <img src={benefit.icon} alt={benefit.id}/>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-6">
                                <h3 className="text-2xl font-bold text-navy-blue md:text-3xl">{benefit.title}</h3>
                                <p className="max-w-[370px] text-xl">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
};

export default Benefits;