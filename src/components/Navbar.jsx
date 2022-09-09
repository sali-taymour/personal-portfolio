import React from "react";
import Logo from "../assets/logo-portfolio0.png";
import {faBars, faTimes} from 'react-icons/fa' 
export default function Navbar() {
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2F4858]">
            <div>
                <img src={Logo} alt="Logo" style= {{width: '83px'}} />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </div>
    );
}
