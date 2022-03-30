import React, { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  const location = useLocation();
  
  return (
    <div className={location.pathname !=="/pets" ? `navlink-wrapper ${props.className}` : "petsPage-navlinks"}>
      <Link
        onClick={props.onClickNav}
        className="navlink-item"
        smooth
        to="/#about"
      >
        About the shelter
      </Link>
      <Link
        className={location.pathname ==="/pets" ? "navlink-item is-active": "navlink-item "}
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
        to="/#help"
      >
        Help the shelter
      </Link>
      <Link
        onClick={props.onClickNav}
        className="navlink-item"
        smooth
        to="/#contacts"
      >
        Contacts
      </Link>
    </div>
  );
};

export default NavLinks;
