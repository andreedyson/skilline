import { companies } from "../data/data";

const Clients = () => {
  return (
    <div className="max-w-[2000px] mx-auto px-6 py-8 lg:px-20">
        {/* Clients Container */}
        <div className="flex flex-col items-center justify-center gap-6">
            {/* Clients Header */}
            <div>
                <h2 className="text-xl font-medium text-center text-gray-text md:text-2xl">Trusted by 5,000+ Companies Worldwide</h2>
            </div>
            {/* Clients Image */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-6">
                {companies.map((company, index) => (
                    <div key={index} className="flex items-center justify-center p-6">
                        <img src={company.img} alt={company.id} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
};

export default Clients;