import React from "react";

const Dot = (props) => {
  return (
    <button
      onClick={() => props.onClickDot(props.i)}
      className={
        props.current
          ? `carousel__indicator current-dot`
          : "carousel__indicator"
      }
    ></button>
  );
};

export default Dot;
