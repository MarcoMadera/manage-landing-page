import React from "react";
import "./css/CarouselItem.css";
import PropTypes from "prop-types";

const CarouselItem = ({ current, avatar, name, comment }) => {
  return (
    <li className={current ? "CarouselItem current-slide" : "CarouselItem"}>
      <div className="carouselItem__container">
        <img className="carouselItem__image" src={avatar} alt="carousel" />
        <h4 className="carouselItem__container__name">{name}</h4>
        <p className="carouselItem__container__comment">“{comment}”</p>
      </div>
    </li>
  );
};

CarouselItem.propTypes = {
  current: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  comment: PropTypes.string,
  i: PropTypes.number,
};

export default CarouselItem;
