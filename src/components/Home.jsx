import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
    return (
        <div name="Home" className="w-full h-screen bg-[#0a192f]">
            {/* container */}
            <div className="mx-w[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className=" text-lg text-palette-2">Hi, my name is</p>
                <h1 className=" text-palette-6 text-4xl sm:text-7xl ">
                    {" "}
                    Sali Taymourkhan
                </h1>
                <h2 className="text-4xl sm:text-7xl text-palette-6 ">
                    Im Full Stack Developer
                </h2>
                <p className="  text-lg text-palette-6 py-4 max-w-[700px] ">
                    i'm focused on building responsive full-stack web
                    applications.
                </p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-palette-8 hover:border-palette-3 ">
                        view Work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
