import React from "react";

import donation_dog from "../../assets/images/donation-dog.png";
import credit_card from "../../assets/images/credit-card.svg";
import "./Donation.css";

const Donation = () => {
  return (
    <div className="section-donation" id="help">
      <div className="section-donation-content-wrapper">
        <img className="donation-dog" src={donation_dog} alt="donation" />

        <div className="section-donation-content">
          <h3 className="section-content-title">
            You can also make a donation
          </h3>
          <h5 className="donation-content-subtitle">
            Name of the bank / Type of bank account
          </h5>
          <div className="credit_card-wrapper">
            <img className="credit_card-img" src={credit_card} alt="credit-card" />
            <h4 className="credit_card-number">8380 2880 8028 8791 7435</h4>
          </div>
          <p className="donation-content-desc">
              Legal information and lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
              ac diam. Praesent ultrices maximus tortor et vulputate. Interdum
              et malesuada fames ac ante ipsum primis in faucibus.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Donation;
