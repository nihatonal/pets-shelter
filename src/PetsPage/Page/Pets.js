import React, {useEffect} from "react";

import CarouselMulti from "../Components/CarouselMulti";
import "./Pets.css";

const Pets = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [])
  return (
    <div className="pets-container">
      <h3 className="section-content-title ">
        Our friends who are looking for a house
      </h3>
      <CarouselMulti />
    </div>
  );
};

export default Pets;
