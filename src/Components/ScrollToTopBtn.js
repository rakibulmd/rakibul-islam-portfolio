import React, { useEffect, useState } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import "animate.css";

const ScrollToTopBtn = () => {
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY >= window.innerHeight / 2) {
                setNavbarScrolled(true);
            } else {
                setNavbarScrolled(false);
            }
        };
        window.addEventListener("scroll", changeNavbarColor);
        console.log(window);
    }, []);

    return (
        <div className={navbarScrolled ? "fixed bottom-7 right-7" : "hidden"}>
            <button
                c
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
                className="btn bg-emerald-600 border-0  btn-circle shadow-3xl overflow-hidden animate__animated  animate__fadeInUp animate__fast"
            >
                <BsChevronDoubleUp className="text-4xl"></BsChevronDoubleUp>
            </button>
        </div>
    );
};

export default ScrollToTopBtn;
