import React from "react";
import ImageAbout from "../../assets/images/about-pets.png";
import "./About.css";

const About = () => {
  return (
    <div className="section-about" id="about">
      <div className="section-about-wrapper">
        <img src={ImageAbout} alt="ImageAbout" />
        <div className="section-about-content">
          <h3 className="section-content-title">
            About the shelter “Cozy House”
          </h3>
          <p className="section-about-content-text">
            Currently we have 121 dogs and 342 cats on our hands and statistics
            show that only 20% of them will find a family. The others will
            continue to live with us and will be waiting for a lucky chance to
            become dearly loved.
          </p>
          <p className="section-about-content-text">
            We feed our wards with the best food and make sure that they do not
            get sick, feel comfortable (including psychologically) and well. We
            are supported by 87 volunteers and 28 employees of various skill
            levels. About 12% of the animals are taken by the shelter staff.
            Taking care of the animals, they become attached to the pets and
            would hardly ever leave them alone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
