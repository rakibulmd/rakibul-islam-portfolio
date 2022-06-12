import React from "react";
import { Link } from "react-router-dom";
import file from "../../Asset/files/resume.pdf";
import img from "../../Asset/img/rakibulmdgit.jpg";

const Showcase = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-7 md:gap-14 mt-16">
                <div class="avatar">
                    <div class="w-72 md:w-full  max-w-sm rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="1">
                    <h2 className="text-5xl pb-4">
                        Hi! I'm{" "}
                        <span className="text-primary font-bold">Rakibul</span>
                    </h2>
                    <h2 className="text-3xl pb-5">Full Stack Web Developer</h2>
                    <Link
                        className="btn btn-primary"
                        to={file}
                        target="_blank"
                        download
                    >
                        Download Resume
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
