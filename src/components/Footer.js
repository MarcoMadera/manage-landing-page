import React, { useState } from "react";
import "./css/Footer.css";
import Button from "./Button";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../images/icon-youtube.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import { ReactComponent as Logo } from "../images/logo.svg";

const Footer = () => {
  const [email, setEmail] = useState({
    value: "",
    error: false,
    submitted: false,
  });

  const handleChange = (event) => {
    const res = event.target.value;
    setEmail({ value: res, error: false, submitted: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail({
      error: !emailRegex.test(email.value),
      submitted: true,
    });
  };

  const emailRegex = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  let outline = { outline: "unset" };
  if (email.error && email.submitted) {
    outline = { border: "1px solid red" };
  }

  return (
    <div className="Footer">
      <div className="footer__container">
        <div className="footer__container__search">
          <form noValidate id="form" action="#" onSubmit={handleSubmit}>
            <input
              noValidate
              className="footer__container__search__input"
              type="email"
              name="email"
              id="email"
              placeholder="Updates in your inbox…"
              onChange={handleChange}
              style={outline}
            />
            <Button cont="Go" onClick={handleSubmit} />
          </form>
          {email.error && email.submitted && <p>Please insert a valid email</p>}
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
