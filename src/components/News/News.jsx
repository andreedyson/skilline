import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section className='max-w-[2000px] mx-auto px-6 py-12 lg:px-20'>
        <div className="flex flex-col items-center mb-12 text-center">
            <h2 className='text-2xl font-bold text-navy-blue md:text-3xl lg:text-4xl'>Latest News and Resources</h2>
            <p className='text-base text-gray-text md:text-lg lg:text-xl'>See the developments that have occurred to Skillines in the world</p>
        </div>
        <NewsCard />
    </section>
  )
}

export default News