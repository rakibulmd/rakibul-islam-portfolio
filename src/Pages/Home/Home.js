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

            <Projects></Projects>
            <Contact></Contact>
            <ScrollToTopBtn></ScrollToTopBtn>
        </div>
    );
};

export default Home;
