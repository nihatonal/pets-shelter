import React, {useState} from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

import SideMenu from "./SideMenu";

import "./MainNavigation.css";
const MainNavigation = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <React.Fragment>
      <MainHeader>
        <Logo />
        <NavLinks className="navlinks" />
        <Hamburger onClick={handleToggle} show={navbarOpen ? "active-hamburger" : ""}/>
        <SideMenu style={navbarOpen ? { opacity: 1, right: -50 } : null} onClickNav={handleToggle} />
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
