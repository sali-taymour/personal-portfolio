import React from "react";
import Aboutimg from '../assets/logo-portfolio0.png'
const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-[#d1c694] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl  text-palette-1 font-bold inline border-b-4 border-palette-9">
                            About
                        </p>
                    </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <img src={Aboutimg} alt="About" />
                    </div>
                    <div>
                        <p className="pb-60 text-lg text-palette-1">
                            Engagierte und zielorientierte Fullstack
                            Web-Entwicklerin، auf der Suche nach einer
                            spannenden Tätigkeit als Frontend Entwicklerin. Mein
                            Ziel ist es meine Erfahrungen als kundenorientierte
                            Unternehmerin und neu-gewonnenen IT Kenntnisse
                            zusammenzuführen، diese gewinnbringend einzusetzen
                            und kreative Webseiten / Benutzer-Applikationen zu
                            erstellen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
