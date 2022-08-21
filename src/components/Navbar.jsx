import React, { useState } from 'react';
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = function() {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
            <div className='sticky top-0 z-50  border-b '>
            <div className="flex p-4 justify-between lg:justify-around text-black md:backdrop-blur md:bg-transparent backdrop-blur-none bg-white">
                <div className="px-4 text-gray-800 mt-2">
                    <a className="font-bold text-3xl" href="">AF Media</a>
                </div>
                <div className='hidden md:block'>
                    <div className='mt-1 flex'>
                        <ul className="flex space-x-20">
                            <li className="hover:border-b-4 border-gray-500 font-medium mt-3 cursor-pointer">
                                <Link activeClass="active" to="section-1" spy={true} smooth={true} offset={-100} duration={500}>
                                    Home
                                </Link>
                            </li>
                            <li className="hover:border-b-4 border-gray-500 font-medium mt-3 cursor-pointer">
                                <Link activeClass="active" to="section-2" spy={true} smooth={true} offset={-100} duration={500}>
                                    Skills
                                </Link>
                            </li>
                            <li className="hover:border-b-4 border-gray-500 font-medium mt-3 cursor-pointer">
                                <Link activeClass="active" to="section-3" spy={true} smooth={true} offset={-100} duration={500}>
                                    Projects
                                </Link>
                            </li>
                            <button className="p-4 bg-cyan-300 hover:bg-cyan-500 rounded-md font-medium mt-[-2px]">
                                <Link activeClass="active" to="section-4" spy={true} smooth={true} offset={-100} duration={500}>
                                    Contact Me!
                                </Link>
                            </button>
                        </ul>
                    </div>
                </div>

                <div onClick={handleNav} className='block md:hidden mt-4'>
                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={!nav ? 'fixed left-0 top-[77px] w-[60%] h-full ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <ul className='uppercase p-4  bg-white h-[1000px]'>
                        <li className='p-4 border-b border-gray-300 cursor-pointer'>
                            <Link activeClass="active" to="section-1" spy={true} smooth={true} offset={-100} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className='p-4 border-b border-gray-300 cursor-pointer'>
                            <Link activeClass="active" to="section-2" spy={true} smooth={true} offset={-100} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li className='p-4 border-b border-gray-300 cursor-pointer'>
                            <Link activeClass="active" to="section-3" spy={true} smooth={true} offset={-100} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li className='p-4 cursor-pointer'>
                            <Link activeClass="active" to="section-4" spy={true} smooth={true} offset={-100} duration={500}>
                                Contact Me!
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;