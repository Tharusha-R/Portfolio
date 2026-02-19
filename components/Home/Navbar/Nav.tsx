"use client";
import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            else setNavBg(false);
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <div className={`transition-all ${navBg ? "bg-[#0f142ed9] shadow-md" : "fixed"} duration-200 h-[12vh] z-50 fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
                
                {/* logo */}
                <div 
                    onClick={() => {
                        const section = document.querySelector("#home");
                        if (section) section.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group flex items-center space-x-2 cursor-pointer transition-all duration-300"
                >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center 
                                    transition-transform duration-300
                                    group-hover:bg-indigo-500 
                                    group-hover:scale-125
                                    group-hover:shadow-lg">
                        <FaCode className="w-5 h-5 text-black 
                                        transition-colors duration-300 
                                        group-hover:text-white" />
                    </div>

                    <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold 
                                    transition-all duration-300 
                                    group-hover:text-indigo-400 
                                    group-hover:tracking-wider
                                    group-hover:scale-105">
                        Rukshan
                    </h1>
                </div>

                {/* navlinks */}
                <div className="hidden lg:flex items-center space-x-10">
                    {Navlinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            onClick={(e) => {
                                e.preventDefault();
                                const section = document.querySelector(link.url);
                                if (section) section.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="text-base hover:text-indigo-400 text-white font-medium transition-all duration-200"
                        >
                            {link.Lable}
                        </Link>
                    ))}
                </div>

                {/* CV Button */}
                <a href="/Tharusha_CV.pdf" download>
                    <button
                        className="px-8 py-3.5 text-sm cursor-pointer rounded-lg
                                   bg-gradient-to-r from-blue-500 to-blue-800
                                   hover:from-blue-600 hover:to-blue-900
                                   transition-all duration-300 text-white
                                   flex items-center space-x-2"
                    >
                        <BiDownload className="w-5 h-5" />
                        <span>Download CV</span>
                    </button>
                </a>

                {/* Burger Menu */}
                <HiBars3BottomRight 
                    onClick={openNav}  
                    className='w-8 h-8 cursor-pointer text-white lg:hidden'
                />
            </div>
        </div>
    )
}

export default Nav;
