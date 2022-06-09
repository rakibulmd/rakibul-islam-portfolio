import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container mx-auto">
                <nav>
                    <div className="flex justify-center py-3">
                        <Link className="btn btn-sm btn-ghost" to="/">
                            Home
                        </Link>
                        <Link className="btn btn-sm btn-ghost" to="/">
                            About Me
                        </Link>
                        <Link className="btn btn-sm btn-ghost" to="/">
                            Contact
                        </Link>
                        <Link className="btn btn-sm btn-ghost" to="/">
                            Portfolio
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
