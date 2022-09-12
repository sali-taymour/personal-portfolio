import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-palette-4">
            {/* container */}
            <div className="mx-w[1000px] mx-auto px-20 flex flex-col justify-center h-full">
                <p className=" text-xl text-gray-800">Hi, my name is</p>
                <h1 className=" text-palette-6 text-2xl sm:text-5xl ">
                    {" "}
                    Sali Taymourkhan
                </h1>
                <h2 className="text-4xl sm:text-6xl text-palette-6 ">
                    Im Full Stack Developer
                </h2>
                <p className="  text-xl text-palette-6 py-4 max-w-[700px] ">
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
