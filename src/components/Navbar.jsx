import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handelClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-palette-1 text-gray-300 shadow-bs hover:bsh ">
            <div>
                <img
                    className=" hover:bsh "
                    src={Logo}
                    alt="Logo"
                    style={{ width: "9rem" }}
                />
            </div>
            {/* menue */}

            <ul className=" hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handelClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menue */}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left0 w-full h-screen bg-palette-1 flex flex-col justify-center"
                }
            >
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>
            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[162px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-xl">
                        <a
                            className=" flex justify-between items-center w-full  text-gray-300 "
                            href="/"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[162px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900 rounded-xl ">
                        <a
                            className="flex justify-between items-center w-full  text-gray-300 "
                            href="/"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[162px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-palette-9  rounded-xl">
                        <a
                            className="flex justify-between items-center w-full  text-gray-300 "
                            href="/"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[162px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-palette-5  rounded-xl">
                        <a
                            className="flex justify-between items-center w-full  text-gray-300 "
                            href="/"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
