import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import file from "../../Asset/files/resume.pdf";
import img from "../../Asset/img/rakibulmdgit.jpg";

const Header = () => {
    const [navbarScrolled, setnavbarScrolled] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const changeNavbarScroll = () => {
            if (window.scrollY >= 120) {
                setnavbarScrolled(true);
            } else {
                setnavbarScrolled(false);
            }
        };
        window.addEventListener("scroll", changeNavbarScroll);
    }, []);
    const handleLogoClick = () => {
        window.scrollTo(0, 0);
        navigate("/");
    };
    const navItems = (
        <>
            <li>
                <Link
                    className="text-lg hover:text-emerald-400 font-bold uppercase"
                    to="/"
                >
                    Home
                </Link>
            </li>
            <li>
                <a
                    className="text-lg hover:text-emerald-400 font-bold uppercase"
                    href="#about"
                >
                    About
                </a>
            </li>
            <li>
                <a
                    className="text-lg hover:text-emerald-400 font-bold uppercase"
                    href="#projects"
                >
                    Portfolio
                </a>
            </li>
            <li>
                <a
                    className="text-lg  hover:text-emerald-400 font-bold uppercase"
                    href="#contact"
                >
                    Contact
                </a>
            </li>
            <li>
                <a
                    className="text-lg  hover:text-emerald-400 font-bold uppercase"
                    href="#blogs"
                >
                    Blog
                </a>
            </li>
        </>
    );

    return (
        <header
            id="header"
            className={
                navbarScrolled
                    ? "sticky top-0 z-50 bg-gray-900/90 backdrop-blur shadow-lg transition-all"
                    : "sticky top-0 z-50 transition-all"
            }
        >
            <div className="container mx-auto">
                <div className="navbar py-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost lg:hidden bg-emerald-500 mr-3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2.5"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex="0"
                                className="menu  dropdown-content mt-6 p-2 shadow-lg bg-gray-900/95 rounded-box w-52  text-white backdrop-blur"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <button
                            onClick={handleLogoClick}
                            className="flex items-center gap-2"
                        >
                            <img
                                className="w-10 h-10 rounded-full"
                                alt="Rakibul Islam"
                                src={img}
                            />{" "}
                            <span className="font-bold"> Rakibul</span>
                        </button>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">{navItems}</ul>
                    </div>
                    <div className="navbar-end">
                        <Link
                            className="btn bg-emerald-500 hover:bg-emerald-400 text-white border-none"
                            to={file}
                            target="_blank"
                            download
                        >
                            Resume
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
