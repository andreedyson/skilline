import TestimonialsCard from "./TestimonialsCard";

const Testmonials = () => {
  return (
    <section className="max-w-[2000px] mx-auto px-6 py-12 lg:px-20">
      <div className="grid grid-cols-1 text-center lg:grid-cols-2 lg:text-start">
        <div className="flex flex-col items-center gap-6 lg:items-start">
          <span className="uppercase text-gray-text">Testimonial</span>
          <h2 className="max-w-[580px] text-2xl font-bold text-navy-blue md:text-3xl lg:text-4xl">What They Say?</h2>
          <p className="max-w-[700px] text-base text-gray-text md:text-lg lg:text-xl">Skilline has got more than 100k positive ratings from our users around the world.</p>
          <p className="max-w-[700px] text-base text-gray-text md:text-lg lg:text-xl">Some of the students and teachers were greatly helped by the Skilline.</p>
          <p className="max-w-[700px] text-base text-gray-text md:text-lg lg:text-xl">Are you too? Please give your assessment</p>
          <button className="w-[200px] h-[50px] bg-transparent text-main-orange ring-2 ring-main-orange duration-200 ease-in-out rounded-full hover:bg-main-orange hover:text-white">Write your assessment</button>
        </div>
      <TestimonialsCard />
      </div>
    </section>
  )
};

export default Testmonials;