import React from "react";
import "./css/Navbar.css";
import logo from "../images/logo.svg";
import hamburgerMenuico from "../images/icon-hamburger.svg";
import closeMenuico from "../images/icon-close.svg";
import Button from "./Button";
import PropTypes from "prop-types";

const Navbar = ({ show, openModal, closeModal }) => {
  return (
    <div className="Navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__container__pages">
          <a href="./#pricing">Pricing</a>
          <a href="./#product">Product</a>
          <a href="./#about">About Us</a>
          <a href="./#careers">Careers</a>
          <a href="./#community">Community</a>
        </div>
        <div className="navbar__container__hamburgerMenu">
          {!show ? (
            <button onClick={() => openModal()}>
              <img src={hamburgerMenuico} alt="Open Menu" />
            </button>
          ) : (
            <button onClick={() => closeModal()}>
              <img src={closeMenuico} alt="Close Menu" />
            </button>
          )}
        </div>
        <div className="navbar__container__button">
          <Button link="./#GetStarted">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  show: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

export default Navbar;
