import { integrations } from "../data/data";

const Integrations = () => {
  return (
    <section className='max-w-[2000px] mx-auto px-6 py-12 lg:px-20'>
        <div className="grid grid-cols-1 text-center lg:grid-cols-2 lg:text-start">
            {/* Integration Image */}
            <div className="grid grid-cols-2 place-items-center">
                {integrations.map((integration) => (
                    <img key={integration.id} src={integration.img} alt="" />
                ))}
            </div>
            {/* Integration Text */}
            <div className="flex flex-col items-center gap-6 max-lg:mt-10 lg:items-start">
                <span className="uppercase text-gray-text">Integrations</span>
                <h2 className='max-w-[580px] text-2xl font-bold text-navy-blue md:text-3xl lg:text-4xl'>200+ educational tools and platform <span className='text-main-orange'>integrations</span></h2>
                <p className='max-w-[700px] text-base text-gray-text md:text-lg lg:text-xl'>Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
                <button className="w-[200px] h-[50px] bg-transparent text-main-orange ring-2 ring-main-orange duration-200 ease-in-out rounded-full hover:bg-main-orange hover:text-white">See All Integrations</button>
            </div>
        </div>
    </section>
  )
};

export default Integrations;