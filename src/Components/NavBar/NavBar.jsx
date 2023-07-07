import React, { useState } from "react";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../MyImgs/logo.png.png";
import Data from '../../Data/NavList'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeNav = () => {
if(window.scrollY >= 80) {
  setNavbar(true) 
} else {
  setNavbar(false)
}
  }

  window.addEventListener('scroll', changeNav)
  return (
    <nav className={`main-nav ${navbar ? 'active' : ''}`}>
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          className="animate__slideInDown animate__animated"
        />
      </div>
      <div className="menu-link">
        <ul className="nav-list animate__animated animate__flipInX">
          {Data.map((links) => {
            const {id, link, title} = links;
            return (
              <li key={id}>
            <a href={link}>{title}</a>
          </li>
            )
          })}
        </ul>
      </div>
      {isOpen ? (
        <FaTimes className="times" onClick={toggle} />
      ) : (
        <FaBars className="times" onClick={toggle} />
      )}

      <div className={`dropdown-menu ${isOpen? 'open' : ''}`}>
        <ul className="nav-list">
        {Data.map((links) => {
            const {id, link, title} = links;
            return (
              <li key={id} onClick={() => setIsOpen(false)}>
            <a href={link}>{title}</a>
          </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
