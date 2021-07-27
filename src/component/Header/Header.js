//import useState hook to create menu collapse state
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from './react-logo.svg';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

//import icons from react icons
import { FaList, FaRegHeart, FaHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import "./Header.css";

const Header = () => {  
  const Logout = () => {
    console.log('Logout!')
    localStorage.removeItem('validUser');
    window.location = '';
    let history = useHistory();

    history.push('/');
    // window.location.reload();
  }

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
  //condition checking to change state from true to false and vice versa
  menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
};

  return (
    <div className="navbar-custom">
        <NavLink to='/' className="company-logo-name"><img src={logo} className="header-logo" alt="logo" />Common Module</NavLink>
        <div className="navbar-menus">
            <NavLink exact className="nav-link" to="/" activeClassName="active_link">Dashboard</NavLink>

            <NavLink exact className="nav-link has-dropdown-menu" to="/createAnnouncement" activeClassName="active_link">
            <span className="dropdown-menu-span">Announcement</span>
            <div className="dropdown-menu">
                <NavLink exact className="nav-link" to="/createAnnouncement" activeClassName="active_link">Create New</NavLink>
                <NavLink exact className="nav-link" to="/savedAnnouncement" activeClassName="active_link">Select Saved</NavLink>
            </div>
            </NavLink>

            <NavLink exact className="nav-link has-dropdown-menu" to="/createAnnouncement" activeClassName="active_link">
            <span className="dropdown-menu-span">Templates</span>
            <div className="dropdown-menu">
                <NavLink exact className="nav-link" to="/editorlist" activeClassName="active_link">List & Editor</NavLink>
                <NavLink exact className="nav-link" to="/editor" activeClassName="active_link">Editor</NavLink>
            </div>
            </NavLink>

            {/* <NavLink exact className="nav-link" to="/createAnnouncement" activeClassName="active_link">Create Announcement</NavLink> */}            
            {/* <NavLink exact className="nav-link" to="/savedAnnouncement" activeClassName="active_link">Saved Announcement</NavLink> */}

            <NavLink className="nav-link" to="/" onClick={Logout} >Logout</NavLink>

            {/* <NavLink exact className="nav-link has-dropdown-menu" to="/" activeClassName="active_link">
            <span className="dropdown-menu-span">DropDown Test</span>
            <div className="dropdown-menu">
                <NavLink exact className="nav-link" to="/editor" activeClassName="active_link">Item 1</NavLink>
                <NavLink exact className="nav-link" to="/editor" activeClassName="active_link">Item 2</NavLink>
            </div>
            </NavLink> */}
            
        </div>
    </div>
  );
};

export default Header;