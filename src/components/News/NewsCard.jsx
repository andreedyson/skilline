import { blogmain } from "../../assets/assetsData";
import { blogsSmall } from "../../data/data";

const NewsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <div className="flex flex-col items-center">
            <div>
                <img src={blogmain} alt="" className="mb-10"/>
                <span className="inline-block px-8 py-1 mb-5 font-medium uppercase rounded-full bg-yellow-type text-navy-blue">News</span>
                <h3 className="max-w-[350px] mb-5 text-base md:text-lg lg:text-[24px] font-bold md:max-w-[570px]">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                <p className="max-w-[350px] mb-6 text-sm md:text-base lg:text-lg text-gray-text md:max-w-[550px]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                <a href="#">Read more</a>
            </div>
        </div>
        <div className="flex flex-col items-center gap-8">
            {blogsSmall.map((blog, index) => (
                <div key={index} className="flex flex-col gap-6 xl:flex-row">
                    <div>
                        <img src={blog.img} alt="" className="bg-contain max-md:w-[400px] max-xl:w-[620px]"/>
                    </div>
                    <div>
                        <span className="inline-block px-3 py-1 mb-2 text-xs font-medium uppercase rounded-full bg-yellow-type text-navy-blue md:text-sm">{blog.type} </span>
                        <h3 className="max-w-[350px] mb-4 text-base md:text-lg lg:text-[24px] font-bold md:max-w-[570px]">{blog.title}</h3>
                        <p className="max-w-[350px] mb-4 text-sm md:text-base lg:text-lg text-gray-text md:max-w-[550px]">{blog.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewsCard