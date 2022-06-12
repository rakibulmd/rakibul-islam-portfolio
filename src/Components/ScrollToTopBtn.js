import React, { useEffect, useState } from "react";

const ScrollToTopBtn = () => {
    const [navbarScrolled, setnavbarScrolled] = useState(false);

    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY >= window.innerHeight) {
                setnavbarScrolled(true);
            } else {
                setnavbarScrolled(false);
            }
        };
        window.addEventListener("scroll", changeNavbarColor);
    }, []);

    return (
        <div className={navbarScrolled ? "fixed bottom-7 right-7" : "hidden"}>
            <button
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
                className="btn bg-emerald-600 border-0  btn-circle shadow-3xl"
            >
                TOP
            </button>
        </div>
    );
};

export default ScrollToTopBtn;