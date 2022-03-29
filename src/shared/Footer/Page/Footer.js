import React from "react";

import FooterContact from "../Components/FooterContact";
import FooterAddress from "../Components/FooterAddress";
import footer_puppy from "../../../assets/images/footer-puppy.png";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer id="contacts">
      <div className="footer-content">
        <FooterContact className="footerContact"/>
        <FooterAddress />
        <img className="footer_puppy" src={footer_puppy} alt="footer_puppy" />
      </div>
    </footer>
  );
};

export default Footer;
