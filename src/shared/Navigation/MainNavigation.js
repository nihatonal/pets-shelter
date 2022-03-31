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
        <Logo
          styleName={
            navbarOpen && location.pathname === "/pets"
              ? { color: "#F1CDB3" }
              : location.pathname === "/pets"
              ? { color: "#545454" }
              : null
          }
          styleSubName={
            navbarOpen && location.pathname === "/pets"
              ? { color: "#F1CDB3" }
              : location.pathname === "/pets"
              ? { color: "#292929" }
              : null
          }
        />
        <NavLinks
          className="navlinks"
          // styleNavItem={
          //   location.pathname === "/pets" ? { color: "#545454" } : null
          // }
          classNav={location.pathname === "/pets" ? "navPagePets" : null}
        />
        <Hamburger
          style={
            navbarOpen && location.pathname === "/pets"
              ? { background: "#F1CDB3" }
              : location.pathname === "/pets"
              ? { background: "#000" }
              : navbarOpen
              ? { opacity: 1, right: -50 }
              : null
          }
          onClick={handleToggle}
          show={navbarOpen ? "active-hamburger" : ""}
        />
        <SideMenu
          style={
            navbarOpen && location.pathname === "/pets"
              ? { opacity: 1, right: 0 }
              : navbarOpen
              ? { opacity: 1, right: -50 }
              : null
          }
          onClickNav={handleToggle}
        />
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
