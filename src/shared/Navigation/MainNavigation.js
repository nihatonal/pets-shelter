import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

import SideMenu from "./SideMenu";

import "./MainNavigation.css";
const MainNavigation = (props) => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <React.Fragment>
      <MainHeader>
        <Logo />
        <NavLinks
          className="navlinks"
          styleNavItem={
            location.pathname === "/pets" ? { color: "#545454" } : null
          }
        />
        <Hamburger
          style={location.pathname === "/pets" ? { background: "#000" } : null}
          onClick={handleToggle}
          show={navbarOpen ? "active-hamburger" : ""}
        />
        <SideMenu
          style={navbarOpen ? { opacity: 1, right: 0 } : null}
          onClickNav={handleToggle}
        />
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
