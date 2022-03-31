import React, { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  const location = useLocation();
  
  return (
    <div className={`navlink-wrapper ${props.className}`}>
      <Link
        onClick={props.onClickNav}
        className={`navlink-item ${props.classNav}`}
        smooth
        to="/#about"
        style={props.styleNavItem}
      >
        About the shelter
      </Link>
      <Link
        className={location.pathname ==="/pets" ? `navlink-item is-active ${props.classNav}` : `navlink-item`}
        onClick={props.onClickNav}
        smooth
        to="/#pets"
        style={props.styleNavItem}
      >
        Our pets
      </Link>
      <Link
        onClick={props.onClickNav}
        className={`navlink-item ${props.classNav}`}
        smooth
        to="/#help"
        style={props.styleNavItem}
      >
        Help the shelter
      </Link>
      <Link
        onClick={props.onClickNav}
        className={`navlink-item ${props.classNav}`}
        smooth
        to="/#contacts"
        style={props.styleNavItem}
      >
        Contacts
      </Link>
    </div>
  );
};

export default NavLinks;
