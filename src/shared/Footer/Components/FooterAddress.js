import React from "react";

import map_icon from "../../../assets/images/icon-marker.svg";

import "./FooterItem.css";

const FooterAddress = () => {
  return (
    <div className="footer_item location">
      <h3 className="footer_item-title">We are waiting for your visit</h3>
      <div className="footer_item-contact address">
        <img src={map_icon} alt="address" />
        <h4>
          <a
            href="https://www.google.com/maps/place/206+Washington+St,+Boston,+MA+02109,+Amerika+Birle%C5%9Fik+Devletleri/@42.3587231,-71.0596734,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370846859eb87:0x5d17fefb1a29e6e1!8m2!3d42.3587231!4d-71.0574847"
            target="_blank"
          >
            1 Central Street, Boston (entrance from the store)
          </a>
        </h4>
      </div>
      <div className="footer_item-contact address">
        <img src={map_icon} alt="address" />
        <h4>
          <a
            href="https://www.google.com/maps/place/South+Park+Gardens/@51.4217638,-0.2011777,17z/data=!4m13!1m7!3m6!1s0x487608baa7401b31:0x18e66d9fcd2f7d77!2sSouth+Park+Court,+18+S+Park+Rd,+London+SW19+8TD,+Birle%C5%9Fik+Krall%C4%B1k!3b1!8m2!3d51.4202685!4d-0.2001799!3m4!1s0x487608b0444135a5:0x26ad24d16140d887!8m2!3d51.4222798!4d-0.1984674"
            target="_blank"
          >
            18 South Park, London
          </a>
        </h4>
      </div>
    </div>
  );
};

export default FooterAddress;
