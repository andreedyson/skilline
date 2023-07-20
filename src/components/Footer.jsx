import { logofooter } from "../assets/assetsData";

const Footer = () => {
  return (
    <footer className='max-w-[2000px] mx-auto bg-purple-footer px-6 py-12 lg:px-20'>
        <div className="flex flex-col items-center gap-10 text-white">
            <div className="flex items-center">
                <img src={logofooter} alt="" className="w-[150px] px-6"/>
                <p className="px-6 text-xl font-bold border-l-2 border-l-gray-500">Virtual Class <br /> for Zoom</p>
            </div>
            <form className="flex flex-col items-center">
                <p className="text-gray-text text-base md:text-lg lg:text-[24px] font-bold mb-4">Subscribe to get our newsletter</p>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <input type="text" placeholder="Your Email" className="w-full lg:w-[430px] bg-transparent px-6 py-4 rounded-full ring-2 ring-gray-500 mr-5"/>
                    <button className="px-8 py-4 text-lg font-medium rounded-full bg-purple-icon">Subscribe</button>
                </div>
            </form>
            <div className="flex flex-col items-center gap-8 lg:flex-row">
                <p><a href="#">Careers</a></p>
                <p><a href="#">Priivacy Policy</a></p>
                <p><a href="#">Terms & Conditions</a></p>
            </div>
            <p>© 2021 Class Technologies Inc. </p>
        </div>
    </footer>
  )
};

export default Footer;