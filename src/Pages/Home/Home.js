import React from "react";
import Header from "../Shared/Header";
import Projects from "./Projects";
import Showcase from "./Showcase";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Showcase></Showcase>
            <Projects></Projects>
        </div>
    );
};

export default Home;
