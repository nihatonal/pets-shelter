import React from "react";
import { Link } from "react-router-dom";

import herobg from '../../assets/images/start-screen-puppy.png';
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h2 className="hero-content-title">Not only people need a house</h2>
          <p className="hero-content-desc">
            We offer to give a chance to a little and nice puppy with an
            extremely wide and open heart. He or she will love you more than
            anybody else in the world, you will see!
          </p>
          <Link to="/pets" className="hero-content-btn">
            Make a friend
          </Link>
        </div>
        <img src={herobg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
