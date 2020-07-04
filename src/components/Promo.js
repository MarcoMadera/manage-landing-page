import React from "react";
import "./css/Promo.css";
import Button from "./Button";
const Promo = () => {
  return (
    <div className="Promo">
      <div className="promo__container">
        <h1 className="promo__container__title">
          Simplify how your team works today.
        </h1>
        <Button
          className="promo__container__Button"
          link="./#GetStarted"
          cont="Get Started"
        />
      </div>
    </div>
  );
};

export default Promo;
