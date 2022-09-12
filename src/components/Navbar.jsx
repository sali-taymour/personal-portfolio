import React, { useState } from "react";
import Logo from "../assets/logo6.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4  text-gray-300 shadow-bs hover:bsh ">
            <div>
                <img
                    className=" hover:bsh "
                    src={Logo}
                    alt="Logo"
                    style={{ width: "6rem" }}
                />
            </div>
            {/* menue */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
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
                <li className="py-6 text-4xl">
                    <Link
                        onClick={handleClick}
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        onClick={handleClick}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        onClick={handleClick}
                        to="skills"
                        smooth={true}
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link
                        onClick={handleClick}
                        to="work"
                        smooth={true}
                        duration={500}
                    >
                        Work
                    </Link>
                </li>
            </ul>
            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[162px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-xl">
                        <a
                            className=" flex justify-between items-center w-full  text-gray-300 "
                            href="https://www.linkedin.com/in/sali-taymour/"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[162px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900 rounded-xl ">
                        <a
                            className="flex justify-between items-center w-full  text-gray-300 "
                            href="https://github.com/sali-taymour"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
