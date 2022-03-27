import React from "react";
import { Link } from "react-router-dom";

import "./Logo.css";

const Logo = (props) => {
    return (
        <Link to="/" className = {`logo-wrapper ${props.className}`}>
            <p className = {"logo-name"}>Cozy House</p>
            <p className = {"logo-subname"}>Shelter for pets in Boston</p>
        </Link>
    )
};

export default Logo;
