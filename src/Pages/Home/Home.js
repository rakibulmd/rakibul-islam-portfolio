import React from "react";
import ScrollToTopBtn from "../../Components/ScrollToTopBtn";
import Header from "../Shared/Header";
import Contact from "./Contact";
import Projects from "./Projects";
import Showcase from "./Showcase";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Showcase></Showcase>
            <Projects></Projects>
            <Contact></Contact>
            <ScrollToTopBtn></ScrollToTopBtn>
        </div>
    );
};

export default Home;
