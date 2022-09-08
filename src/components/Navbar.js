import React, { useState } from "react";
import logo from "./photo/logo.png";
import email from "./photo/email.png";
import img1 from "./photo/full.jpg";
import phone from "./photo/phone.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  //change color
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <div className="navbar">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>

          <NavLink className="link" to="career">
            Career
          </NavLink>
          <NavLink className="link" to="company">
            Company
          </NavLink>
          <NavLink className="link" to="industries">
            Industries
          </NavLink>
          <NavLink className="link" to="products">
            Products
          </NavLink>
          <NavLink className="link" to="service">
            Service
          </NavLink>
          <NavLink className="link" to="soluction">
            Soluction
          </NavLink>

          <div className="back">
            <div className="email">
              <img src={email} />
              <img src={phone} />
            </div>
            <div className="phone">
              <a>+91-1234567891</a>
            </div>
          </div>
        </div>
      </div>
      <img src={img1} alt="main" />

      
    </>
  );
}

export default Navbar;
