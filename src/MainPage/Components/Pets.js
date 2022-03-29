import React from "react";
import { Link } from "react-router-dom";

import Carousel from "../../shared/IU/Carousel";

import "./Pets.css";
const Pets = () => {
  return (
    <div className="section-pets" id="pets">
      <h3 className="section-content-title pets-title">
        Our friends who are looking for a house
      </h3>
      <h3 className="section-content-title mobile">
        Our friends who<br></br>are looking for a house
      </h3>
      <Carousel />
      <Link to="/" className="pets-btn">Get to know the rest</Link>
    </div>
  );
};

export default Pets;
