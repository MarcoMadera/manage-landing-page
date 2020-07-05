import React from "react";
import "./css/CarouselItem.css";

const CarouselItem = (props) => {
  return (
    <li
      className={props.current ? "CarouselItem current-slide" : "CarouselItem"}
    >
      <div className="carouselItem__container">
        <img
          className="carouselItem__image"
          src={props.avatar}
          alt="carousel image"
        />
        <h4 className="carouselItem__container__name">{props.name}</h4>
        <p className="carouselItem__container__comment">“{props.comment}”</p>
      </div>
    </li>
  );
};

export default CarouselItem;
