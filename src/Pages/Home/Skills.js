import React from "react";
import html5 from "../../Asset/img/logos/html-5.png";
import css3 from "../../Asset/img/logos/css-3.png";
import js from "../../Asset/img/logos/js.png";
import react from "../../Asset/img/logos/react.png";

const Skills = () => {
    return (
        <div className="container mx-auto mt-20 p-3">
            <div className="p-5  bg-white/10 backdrop-blur-md rounded-xl mt-7">
                <h2 className="text-center text-4xl font-bold pb-7">
                    My Skills
                </h2>
                <div className="flex gap-7 sm:gap-14 flex-wrap justify-center">
                    <div className="text-center px-5 py-2  bg-gradient-to-t from-orange-400/50 via-transparent  to-transparent hover:via-orange-400/50 rounded-lg transition-all">
                        <img
                            className="w-20 sm:w-40 hover:scale-105 transition-all"
                            src={html5}
                            alt=""
                        />
                        <p className="font-bold text-xl mt-4">HTML5</p>
                    </div>
                    <div className="text-center px-5 py-2  bg-gradient-to-t from-sky-400/50 via-transparent  to-transparent hover:via-sky-400/50 rounded-lg transition-all">
                        <img
                            className="w-20 sm:w-40 hover:scale-105 transition-all"
                            src={css3}
                            alt=""
                        />
                        <p className="font-bold text-xl mt-4">CSS3</p>
                    </div>
                    <div className="text-center px-5 py-2  bg-gradient-to-t from-yellow-500/50 via-transparent  to-transparent hover:via-yellow-400/50 rounded-lg transition-all">
                        <img
                            className="w-20 sm:w-40 hover:scale-105 transition-all"
                            src={js}
                            alt=""
                        />
                        <p className="font-bold text-xl mt-4">JavaScript</p>
                    </div>
                    <div className="text-center px-5 py-2  bg-gradient-to-t from-sky-500/50 via-transparent  to-transparent hover:via-sky-400/50 rounded-lg transition-all">
                        <img
                            className="w-20 sm:w-40 hover:scale-105 transition-all"
                            src={react}
                            alt=""
                        />
                        <p className="font-bold text-xl mt-4">React.js</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
