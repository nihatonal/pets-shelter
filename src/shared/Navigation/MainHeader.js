import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./MainHeader.css";

const MainHeader = (props) => {
  const location = useLocation();

  //console.log(window.location.pathname);
  useEffect(() => {
    if (location.pathname === "/pets") console.log(location.pathname);
  },[location.pathname]);

  return <header className={location.pathname !=="/pets" ? "header" : "header-petsPage"}>{props.children}</header>;
};

export default MainHeader;
