import React from 'react';
import "./navbar.scss";
import logo from '../../logo.svg';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import Max from "./woman1.jpg";
import { useState } from "react";

const Navbar = () => {
 const [isScrolled, setIsScrolled] = useState(false);

 window.onscroll = () => {
  setIsScrolled(window.pageYOffset === 0 ? false : true);
  return () => (window.onscroll = null)
 };

 return (
  <div className={isScrolled ? "navbar scrolled" : "navbar"}>
   <div className="container">
    <div className="left">
    <img src={logo} alt="netflix" />
   <span>Homepage</span>
   <span>Series</span>
   <span>Movies</span>
   <span>New and Popular</span>
   <span>My List</span>
    </div>
    <div className="right">
     <Search className="icons"/>
     <span>KIDS</span>
     <Notifications className="icons"/>
     <img src={Max} alt="user" />
     <div className="profile">
      <ArrowDropDown className="icons"/>
     <div className="options">
      <span>Settings</span>
      <span>Log Out</span>
     </div>
     </div>
    </div>
    
   </div>
  </div>
 )
}

export default Navbar;