import React from "react";
import ScrollToTopBtn from "../../Components/ScrollToTopBtn";
import Header from "../Shared/Header";
import Contact from "./Contact";
import Projects from "./Projects";
import Showcase from "./Showcase";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Header></Header>

            <Showcase></Showcase>
            <Skills></Skills>
            <h2 className="text-3xl text-center py-5">
                '' This Site is under construction, features that are not
                working will be working soon. ''
            </h2>
            <Projects></Projects>
            <Contact></Contact>
            <ScrollToTopBtn></ScrollToTopBtn>
        </div>
    );
};

export default Home;
