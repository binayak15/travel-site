import React, { useState } from "react";

import "../styles/navbar.css";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            Travelo
          </div>
          <div className="toggle">
            {" "}
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#test" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
        </ul>
        <button className="btn">Connect</button>
      </nav>
    </>
  );
};

export default Navbar;
