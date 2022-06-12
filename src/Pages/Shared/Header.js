import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import file from "../../Asset/files/resume.pdf";
import img from "../../Asset/img/rakibulmdgit.jpg";

const Header = () => {
    const [navbarScrolled, setnavbarScrolled] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const changeNavbarScroll = () => {
            console.log(window.scrollY);
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
                <Link className="text-lg hover:text-emerald-400" to="/">
                    Home
                </Link>
            </li>
            <li>
                <a className="text-lg hover:text-emerald-400" href="#about">
                    About
                </a>
            </li>
            <li>
                <a className="text-lg hover:text-emerald-400" href="#projects">
                    Portfolio
                </a>
            </li>
            <li>
                <a className="text-lg  hover:text-emerald-400" href="#contact">
                    Contact
                </a>
            </li>
            <li>
                <a className="text-lg  hover:text-emerald-400" href="#blogs">
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
                    ? "sticky top-0 z-50 bg-black/95"
                    : "sticky top-0 z-50 "
            }
        >
            <div className="container mx-auto">
                <div className="navbar py-3">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex="0"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex="0"
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
                            className="btn bg-emerald-500 hover:bg-emerald-400 text-white"
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
