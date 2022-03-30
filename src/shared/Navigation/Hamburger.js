import React from "react";

import "./Hamburger.css";

const Hamburger = (props) => {
  return (
    <div className={`mobile-menu ${props.show}`} onClick={props.onClick}>
      <div style={props.style} className="line line-1"></div>
      <div style={props.style} className="line line-2"></div>
      <div style={props.style} className="line line-3"></div>
    </div>
  );
};
export default Hamburger;
