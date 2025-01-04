import React, { useState } from 'react'
import { SiNike } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { Link, NavLink } from 'react-router-dom';

import jordan from "../../src/assets/jordan.png"

const Navbar = () => {
    const [ visible, setVisible ] = useState(false)

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw]'>
    <div className='w-full flex items-center justify-between'>
        {/* LOGO */}
        <Link to='/'>
            <SiNike className='h-14 w-14' />
        </Link>

        {/* NAVBAR  */}
        <ul className='hidden lg:flex gap-5 text-[#111111] font-helvetica text-base leading-3 font-medium '>

            <NavLink to='/' className="flex text-center items-center gap-1">
                <button className="w-auto mb-1">New & Featured</button>
                <hr className="w-full border-none mx-auto h-[1.5px] bg-[#111111] hidden" />
            </NavLink>

            <NavLink to='/men' className='flex flex-col items-center gap-1'>
                <button>Men</button>
                <hr className='w-full border-none h-[1.5px] bg-[#111111] hidden'/>
            </NavLink>

            <NavLink to='/women' className='flex flex-col items-center gap-1'>
                <button>Women</button>
                <hr className='w-full border-none h-[1.5px] bg-[#111111] hidden'/>               
            </NavLink>

            <NavLink to='/kids' className='flex flex-col items-center gap-1'>
                <button>Kids</button>
                <hr className='w-full border-none h-[1.5px] bg-[#111111] hidden'/>      
            </NavLink>

            <NavLink to='/sale' className='flex flex-col items-center gap-1'>
                <button>Sale</button>
                <hr className='w-full border-none h-[1.5px] bg-[#111111] hidden'/>
            </NavLink>

            <NavLink to='/launch' className='flex flex-col items-center gap-1'>
                <button>SNRS</button>
                <hr className='w-full border-none h-[1.5px] bg-[#111111] hidden'/>
            </NavLink>
        </ul>

        {/* ICONS */}

        <div className="flex items-center justify-center gap-4 lg:gap-2">

            <Link to="/search">
                <IoSearchOutline className="w-6 h-6 cursor-pointer" />
            </Link>

            <Link to="/login">
                <VscAccount className="w-6 h-6 cursor-pointer block lg:hidden" />
            </Link>

            <Link to="/cart" className="relative">
                <BsBag className='w-6 h-5 cursor-pointer' />
                <p className='absolute right-[5px] bottom-[-0px]  w-4 text-center leading-4  text-black aspect-square rounded-full text-[8px]'>10</p>
            </Link>

            <Link>
                <AiOutlineMenu
                    onClick={() => setVisible(true)}
                className='w-6 h-6 cursor-pointer lg:hidden' />
            </Link>

            <Link to="/heart">
                <IoMdHeartEmpty className="w-6 h-6 cursor-pointer hidden lg:block" />
            </Link>

        </div>

        {/* sidebar menu for small screens */}

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#ffffff] transition-all text-lg text-black font-helvetica font-semibold ${visible ? "w-80 border-2 shadow-xl py-0" : "w-0"}`}>

            <div className='flex flex-col '>
                <div  className='flex items-center gap-4 p-3 cursor-pointer'>
                    <div onClick={() => setVisible(false)} className='ml-auto'>
                        <VscChromeClose className='h-6 w-6 rotate-180' />
                    </div>
                </div>

                <div className='flex flex-col gap-4 p-4 mx-4 leading-tight font-medium '>
                    <div className="flex items-center justify-between w-full py-2">
                    <span onClick={() => setVisible(false)} className="flex items-center gap-2 text-base mb-4">
                    <VscAccount className="h-6 w-6" />
                    Hi, John 
                    </span>
                    <VscChevronRight className="h-6 w-6" />
                    </div>

                <NavLink onClick={() => setVisible(false)} to='/' className="flex items-center justify-between w-full hover:text-gray-500">
                    <span>New & Featured</span>
                    <VscChevronRight className='h-6 w-6' />
                </NavLink>

                <NavLink to='/men'
                onClick={() => setVisible(false)}  className="flex items-center justify-between w-full hover:text-gray-500">
                    <span>Men</span>
                    <VscChevronRight className='h-6 w-6' />
                </NavLink>

                <NavLink to='/women'
                onClick={() => setVisible(false)}className="flex items-center justify-between w-full hover:text-gray-500">
                    <span>Women</span>
                    <VscChevronRight className='h-6 w-6' />
                </NavLink>

                <NavLink to="/kids"
                onClick={() => setVisible(false)}className="flex items-center justify-between w-full hover:text-gray-500">
                    <span>Kids</span>
                    <VscChevronRight className='h-6 w-6' />
                </NavLink>

                <NavLink to='/sale'
                onClick={() => setVisible(false)}  className="flex items-center justify-between w-full hover:text-gray-500">
                    <span>Sale</span>
                    <VscChevronRight className='h-6 w-6' />
                </NavLink>

                <NavLink to='/launch'
                onClick={() => setVisible(false)}  className="flex items-center justify-between w-full">
                    <span>SNKRS</span>
                </NavLink>
                </div>

                <div className="flex items-center justify-between w-full  ml-2 leading-tight">
                <div className="flex items-center space-x-2 mx-4 pt-4">
                    <img src={jordan} className="h-6 w-6" alt="Jordan" />
                    <span>Jordan</span>
                </div>
                </div>
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar