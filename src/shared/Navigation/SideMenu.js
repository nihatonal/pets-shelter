import React from 'react';

import NavLinks from "./NavLinks";
import './SideMenu.css';

const SideMenu = (props) => {
    return (
        <div className='side-menu-wrapper' style={props.style}>
            <NavLinks className="side-menu-navlinks" onClickNav={props.onClickNav} />
        </div>
    )
}

export default SideMenu;