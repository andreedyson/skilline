
import { features } from "../../data/data"

const FeaturesItems = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-6 py-12 lg:px-2">
        <div>
            {features.map((feature, index) => (
                <div key={feature.id} className={`grid grid-cols-1 text-center lg:grid-cols-2 md:gap-8 lg:text-start place-items-center ${index !== feature.id.length - 1 ? "mb-8 mt-20" : "mb-0"}`}>
                    <div className={`${!index % 2 === 0 && "lg:order-1"} text-center mb-8 lg:text-start`}>
                        <h2 className="mb-6 text-2xl font-bold text-navy-blue md:text-3xl lg:text-4xl">{feature.title}</h2>
                        <p className="text-base text-gray-text md:text-lg lg:text-xl lg:max-w-[500px]">{feature.description}</p>
                    </div>
                    <div className={`${index % 2 === 0 && "lg:order-2"}`}>
                        <img src={feature.img} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturesItems