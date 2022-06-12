import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import file from "../../Asset/files/resume.pdf";
import img from "../../Asset/img/rakibulmdgit.jpg";

const Header = () => {
    const [navbarScrolled, setnavbarScrolled] = useState(false);
    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY >= 80) {
                setnavbarScrolled(true);
            } else {
                setnavbarScrolled(false);
            }
        };
        window.addEventListener("scroll", changeNavbarColor);
    }, []);
    const navItems = (
        <>
            <li>
                <a href="#projects">Item 1</a>
            </li>
            <li>
                <a href="#projects">Item 1</a>
            </li>
        </>
    );

    return (
        <header
            id="header"
            className={
                navbarScrolled
                    ? "sticky top-0 z-50 bg-black/95 transition-all py-1"
                    : "sticky top-0 z-50 py-2"
            }
        >
            <div className="container mx-auto">
                <div class="navbar">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
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
                                tabindex="0"
                                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <div class="flex items-center gap-2">
                            <img
                                className="w-10 rounded-full"
                                alt="Rakibul Islam"
                                src={img}
                            />{" "}
                            <span className="font-bold"> Rakibul</span>
                        </div>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">{navItems}</ul>
                    </div>
                    <div class="navbar-end">
                        <Link
                            className="btn bg-emerald-600 hover:bg-emerald-500 text-white"
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
