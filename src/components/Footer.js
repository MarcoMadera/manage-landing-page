import React from "react";
import "./css/Footer.css";
import Button from "./Button";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../images/icon-youtube.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import { ReactComponent as Logo } from "../images/logo.svg";

const Footer = () => {
  const search = () => {
    console.log("busca");
  };
  return (
    <div className="Footer">
      <div className="footer__container">
        <div className="footer__container__search">
          <input
            className="footer__container__search__input"
            type="email"
            name="inbox"
            id="inbox"
            placeholder="Updates in your inbox…"
          />
          <Button cont="Go" onClick={search} />
        </div>
        <div className="footer__container__links">
          <a href="./#home">Home</a>
          <a href="./#pricing">Pricing</a>
          <a href="./#products">Products</a>
          <a href="./#about">About Us</a>
          <a href="./#careers">Careers</a>
          <a href="./#community">Community</a>
          <a href="./#privacy">Privacy Policy</a>
        </div>
        <div className="footer__container__socialMedia">
          <a href="./#facebook">
            <Facebook />
          </a>
          <a href="./#youtube">
            <Youtube />
          </a>
          <a href="./#twitter">
            <Twitter />
          </a>
          <a href="./#pinterest">
            <Pinterest />
          </a>
          <a href="./#instagram">
            <Instagram />
          </a>
        </div>
        <div className="footer__container__logo">
          <Logo />
        </div>
        <span className="footer__container__copy">
          Copyright 2020. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
