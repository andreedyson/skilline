import { teachers } from "../assets/assetsData";

const About = () => {
  return (
    <section className="max-w-[2000px] mx-auto px-6 py-12 lg:px-20">
        <div className="flex flex-col items-center gap-6 mb-20 text-center">
            {/* About Header */}
            <h2 className="text-2xl font-bold text-navy-blue md:text-3xl lg:text-4xl">What is <span className="text-main-orange">Skilline?</span></h2>
            <p className="max-w-[1100px] text-base text-gray-text md:text-lg lg:text-xl">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            {/* About Header Grid */}
            <div className="flex flex-col justify-between w-full gap-14 lg:flex-row">
                <div className="relative flex flex-col items-center justify-center p-12 bg-cover lg:w-[600px] lg:h-[400px] bg-instructor rounded-[20px]">
                    <div className="absolute inset-0 bg-black rounded-[20px] opacity-30"/>
                    <div className="z-[1]">
                        <h3 className="mb-4 text-xl font-semibold text-white uppercase md:text-3xl">For Instructors</h3>
                        <button className="w-[200px] h-[50px] text-white ring-2 ring-white rounded-full duration-200 ease-in-out md:w-[280px] hover:bg-white hover:text-main-orange">Start a class today</button>
                    </div>
                </div>  
                <div className="relative flex flex-col items-center justify-center p-12 bg-cover lg:w-[600px] lg:h-[400px] bg-student rounded-[20px]">
                    <div className="absolute inset-0 bg-black rounded-[20px] opacity-20"/>
                    <div className="z-[1]">
                        <h3 className="mb-4 text-xl font-semibold text-white uppercase md:text-3xl">For Students</h3>
                        <button className="w-[200px] h-[50px] bg-aqua-blue text-white rounded-full duration-200 easino md:w-[280px] hover:bg-white hover:text-aqua-blue">Enter access code</button>
                    </div>
                </div>  
            </div>
        </div>
        {/* About Video */}
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="flex flex-col gap-6 text-center lg:text-start">
                <h2 className="max-w-[780px] text-2xl font-bold text-navy-blue md:text-3xl lg:text-4xl">Everything you can do in a pyshical classroom, <span className="text-main-orange">you can do with Skilline</span></h2>
                <p className="max-w-[700px] text-base text-gray-text md:text-lg lg:text-xl">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <a href="#" className="underline text-gray-text hover:text-aqua-blue">Learn more</a>
            </div>
            <div>
                <img src={teachers} alt="" />
            </div>
        </div>
    </section>
  )
};

export default About;