import React from "react";
import { Link } from "react-router-dom";
import file from "../../Asset/files/resume.pdf";
import img from "../../Asset/img/rakibulmdgit.jpg";

const Showcase = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-7 md:gap-14 mt-24">
                <div className="py-5 px-2 flex-1">
                    <h2 className="text-5xl pb-7 font-bold">Hello,</h2>
                    <h2 className="text-8xl pb-4 font-bold tracking-wider">
                        I'm Rakibul
                    </h2>
                    <h2 className="text-5xl pb-4 text-emerald-400 font-bold  tracking-wider">
                        Web Developer
                    </h2>
                    <p className="text-2xl pb-7 tracking-wide">
                        Passionate web developer developing state of the art web
                        application
                    </p>
                    <div className="flex gap-5">
                        <Link
                            className="btn btn-primary bg-emerald-500 border-none text-white"
                            to={file}
                            target="_blank"
                            download
                        >
                            Download Resume
                        </Link>
                        <a
                            className="btn btn-warning text-black border-none text-white"
                            href="#contact"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
                <div className="avatar flex-1">
                    <div className="w-full  max-w-md rounded-full ring ring-emerald-500 ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
