import { features1 } from "../../assets/assetsData";
import { featuresList } from "../../data/data";
import FeaturesItems from "./FeaturesItems";

const Features = () => {
  return (
    <section className="max-w-[2000px] mx-auto px-6 py-12 lg:px-20">
        <div className="flex flex-col items-center justify-center">
          {/* Features Header */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-navy-blue md:text-3xl lg:text-4xl">Our <span className="text-main-orange">Features</span></h2>
            <p className="max-w-[1100px] text-base text-gray-text md:text-lg lg:text-xl">This very extraordinary feature, can make learning activities more efficient</p>
          </div>
          {/* Features Main Items */}
          <div className="flex flex-col items-center justify-between mt-12 lg:flex-row">
            {/* Features Main Image */}
            <div>
              <img src={features1} alt="" />
            </div>
            {/* Features Main Text */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="mt-20 mb-8">
                <h2 className="text-2xl font-bold text-center text-navy-blue md:text-3xl lg:text-4xl lg:text-start">A <span className="text-main-orange">user interface</span> designed for the classroom</h2>
              </div>
              <div>
                <ul className="flex flex-col gap-6">
                  {featuresList.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-4">
                      <img src={feature.icon} alt="" className="p-3 bg-white rounded-full shadow-xl"/>
                      <p className="max-2xl:max-w-[459px] text-xs md:text-sm lg:text-base">{feature.content}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <FeaturesItems />
          <div>
            <button className="w-[180px] h-[50px] bg-transparent text-main-orange ring-2 ring-main-orange duration-200 ease-in-out rounded-full hover:bg-main-orange hover:text-white">See more features</button>
          </div>
        </div>
    </section>
  )
};

export default Features;