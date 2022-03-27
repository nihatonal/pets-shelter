import React from "react";

import Hero from "../Components/Hero";
import About from "../Components/About";
import Pets from "../Components/Pets";
import Help from "../Components/Help";
import Donation from "../Components/Donation";

import "./MainPage.css";

const MainPage = () => {
    return (
        <main>
            <Hero />
            <About />
            <Pets />
            <Help />
            <Donation />
        </main>
    )
}

export default MainPage;