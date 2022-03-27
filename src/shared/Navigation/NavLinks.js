import React, { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <div className={`navlink-wrapper ${props.className}`}>
      <Link onClick={props.onClickNav} className="navlink-item" smooth to="/">
        About the shelter
      </Link>
      <Link
        className={
          window.location.hash === "#pets"
            ? "navlink-item is-active"
            : "navlink-item"
        }
        onClick={props.onClickNav}
        smooth
        to="/#pets"
      >
        Our pets
      </Link>
      <Link
        onClick={props.onClickNav}
        className="navlink-item"
        smooth
        to="#marketing"
      >
        Help the shelter
      </Link>
      <Link
        onClick={props.onClickNav}
        className="navlink-item"
        smooth
        to="#about"
      >
        Contacts
      </Link>
    </div>
  );
};

export default NavLinks;
