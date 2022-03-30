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
        style={location.pathname === "/pets" ? { color: "#545454" } : null}
      >
        Cozy House
      </p>
      <p
        className={"logo-subname"}
        style={location.pathname === "/pets" ? { color: "#292929" } : null}
      >
        Shelter for pets in Boston
      </p>
    </Link>
  );
};

export default Logo;
