import { useState } from 'react';
import { logo } from '../assets/assetsData';
import { navLinks } from '../data/data';
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClickNav = () => setNav(!nav);
  return (
    <nav className='max-w-[2000px] mx-auto bg-light-orange px-6 lg:px-20'>
        {/* Desktop Navigation Bar */}
        <div className='h-[100px] flex justify-between items-center'>
            {/* Navigation Logo */}
            <div>
                <a href=""><img src={logo} alt="skillineLogo" className='w-[100px]'/></a>
            </div>
            {/* Desktop Navigation Link */}
            <div className='hidden text-sm md:text-base lg:flex'>
                <ul className='flex items-center text-lg font-medium'>
                    {navLinks.map((link, index) => (
                        <li key={index} className={`${index !== link.length - 1 ? 'mr-10' : 'mr-0'} hover:text-main-orange`}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                    <div>
                        <button className='w-[140px] h-[50px] bg-white rounded-full mr-10 shadow-md hover:ring-4 duration-200 ease-in-out hover:ring-main-orange'>Login</button>
                        <button className='w-[140px] h-[50px] bg-main-orange rounded-full shadow-md text-white duration-200 ease-in-out hover:bg-main-orange/60'>Sign Up</button>
                    </div>
                </ul>
            </div>
            <div className='block lg:hidden' onClick={handleClickNav}>
                {!nav ? <HiBars3 size={30}/> : <HiOutlineXMark size={30}/>}
            </div>
        </div>
        {/* Mobile Navigation */}
        {nav && <div className='relative'>
            <div className='absolute flex justify-center w-full h-screen bg-light-orange'>
                <ul className='flex flex-col items-center py-4 font-medium'>
                    {navLinks.map((link, index) => (
                        <li key={index} className={`${index !== link.length - 1 ? 'mb-4' : 'mb-0'} hover:text-main-orange`}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                    <div className='flex flex-col'>
                        <button className='w-[140px] h-[50px] bg-white rounded-full mb-4 shadow-md hover:ring-4 hover:ring-main-orange'>Login</button>
                        <button className='w-[140px] h-[50px] bg-main-orange rounded-full shadow-md text-white hover:bg-main-orange/60'>Sign Up</button>
                    </div>
                </ul>
            </div>
        </div>}
    </nav>
  )
};

export default Navbar;