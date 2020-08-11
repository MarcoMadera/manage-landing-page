import React from "react";
import "./css/Dot.css";
import PropTypes from "prop-types";

const Dot = ({ onClickDot, i }) => {
  return (
    <button
      onClick={() => onClickDot(i)}
      className={
        i === 0 ? "carousel__indicator current-dot" : "carousel__indicator"
      }
    ></button>
  );
};

Dot.propTypes = {
  onClickDot: PropTypes.func,
  i: PropTypes.number,
  current: PropTypes.bool,
};

export default Dot;
