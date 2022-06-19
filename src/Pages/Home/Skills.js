import React from "react";
import html5 from "../../Asset/img/logos/html5.png";
import css3 from "../../Asset/img/logos/css-3.png";
import js from "../../Asset/img/logos/js.png";
import reactJs from "../../Asset/img/logos/react.png";
import nodeJs from "../../Asset/img/logos/nodeJs.png";
import expressJs from "../../Asset/img/logos/expressJs.png";

const Skills = () => {
    return (
        <div className="container mx-auto mt-20 p-3">
            <div className="p-5  bg-white/10 backdrop-blur-md rounded-xl mt-7">
                <h2 className="text-center text-4xl font-bold pb-10">
                    My Skills
                </h2>
                <div className="flex gap-7 sm:gap-14 flex-wrap justify-center">
                    <div className="text-center px-5 py-2  bg-gradient-to-t from-orange-600/50 via-transparent  to-transparent hover:via-orange-600/50 rounded-lg transition-all border-t-4 border-orange-600">
                        <div className="h-24 sm:h-32">
                            <img
                                className="w-24 sm:w-32  hover:scale-105 transition-all"
                                src={html5}
                                alt=""
                            />
                        </div>
                        <p className="font-bold text-xl mt-4">HTML5</p>
                    </div>

                    <div className="text-center px-5 py-2  bg-gradient-to-t from-sky-400/50 via-transparent  to-transparent hover:via-sky-400/50 rounded-lg transition-all border-t-4 border-sky-400">
                        <div className="h-24 sm:h-32">
                            <img
                                className="w-24 sm:w-32 hover:scale-105 transition-all"
                                src={css3}
                                alt=""
                            />
                        </div>
                        <p className="font-bold text-xl mt-4">CSS3</p>
                    </div>
                    <div className="text-center px-5 py-2  bg-gradient-to-t from-yellow-500/50 via-transparent  to-transparent hover:via-yellow-400/50 rounded-lg transition-all border-t-4 border-yellow-400">
                        <div className="h-24 sm:h-32">
                            <img
                                className="w-24 sm:w-32 hover:scale-105 transition-all"
                                src={js}
                                alt=""
                            />
                        </div>
                        <p className="font-bold text-xl mt-4">JavaScript</p>
                    </div>

                    <div className="text-center px-5 py-2  bg-gradient-to-t from-sky-500/50 via-transparent  to-transparent hover:via-sky-400/50 rounded-lg transition-all border-t-4 border-sky-500">
                        <div className="h-24 sm:h-32">
                            <img
                                className="w-24 sm:w-32 hover:scale-105 transition-all"
                                src={reactJs}
                                alt=""
                            />
                        </div>
                        <p className="font-bold text-xl mt-4">React.js</p>
                    </div>
                    <div className="text-center px-5 py-2  bg-gradient-to-t from-green-500/50 via-transparent  to-transparent hover:via-green-400/50 rounded-lg transition-all border-t-4 border-green-500">
                        <div className="h-24 sm:h-32">
                            <img
                                className="w-24 sm:w-32 hover:scale-105 transition-all"
                                src={nodeJs}
                                alt=""
                            />
                        </div>
                        <p className="font-bold text-xl mt-4">Node.js</p>
                    </div>
                    <div className="text-center px-5 py-2  bg-gradient-to-t from-lime-500/50 via-transparent  to-transparent hover:via-lime-600/50 rounded-lg transition-al border-t-4 border-lime-400">
                        <div className="h-24 sm:h-32">
                            <img
                                className="w-24 sm:w-32 hover:scale-105 transition-all"
                                src={expressJs}
                                alt=""
                            />
                        </div>
                        <p className="font-bold text-xl mt-4">Express.js</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
