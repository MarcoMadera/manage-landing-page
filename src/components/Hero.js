import React from "react";
import "./css/Hero.css";
import Button from "./Button";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero__container">
        <div className="hero__container__bg"></div>
        <div className="hero__container__midbg">
          <h1 className="hero__container__title">
            Bring everyone together to build better products.
          </h1>
          <p className="hero__container__desc">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button link="./#GetStarted" cont="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
