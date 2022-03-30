import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Logo.css";

const Logo = (props) => {
    const location = useLocation();
  
    return (
        <Link to="/" className = {location.pathname !=="/pets" ? `logo-wrapper ${props.className}` : "petsPage-logo"}>
            <p className = {"logo-name"}>Cozy House</p>
            <p className = {"logo-subname"}>Shelter for pets in Boston</p>
        </Link>
    )
};

export default Logo;
