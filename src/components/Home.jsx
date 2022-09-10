import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
      <div name="Home" className="w-full h-screen bg-palette-1">
          {/* container */}
          <div className="mx-w[1000px] mx-auto px-8 flex flex-col justify-center h-full">
              <p className="text-palette-2">Hi, my name is</p>
              <h1 className="text-4xl sm:text-7xl "> Sali Taymourkhan</h1>
              <h2 className="text-4xl sm:text-7xl text-palette-6 ">
                  Im Full Stack Developer
              </h2>
              <p className=" text-palette-6">
                  i'm focused on building responsive full-stack web
                  applications.
              </p>
              <div>
                  <button>
                      view Work <HiArrowNarrowRight />{" "}
                  </button>
              </div>
          </div>
      </div>
  );
}

export default Home
