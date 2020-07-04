import React from "react";
import "./css/Difference.css";

const Difference = (props) => {
  return (
    <div className="Difference">
      <div className="difference__container"></div>
      <div className="difference__container__title">
        <label className="difference__container__title__numberlabel">
          {props.number}
        </label>
        <span className="difference__container__title__content">
          {props.title}
        </span>
      </div>
      <p className="difference__container__desc">{props.desc}</p>
    </div>
  );
};

export default Difference;
