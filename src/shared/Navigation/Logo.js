import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Logo.css";

const Logo = (props) => {
  const location = useLocation();

  return (
    <Link to="/" className={`logo-wrapper ${props.className}`}>
      <p
        className={"logo-name"}
        style={props.styleName}
      >
        Cozy House
      </p>
      <p
        className={"logo-subname"}
        style={props.styleSubName}
      >
        Shelter for pets in Boston
      </p>
    </Link>
  );
};

export default Logo;
