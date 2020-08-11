import React from "react";
import "./css/Difference.css";
import PropTypes from "prop-types";

const Difference = ({ number, title, children }) => {
  return (
    <div className="Difference">
      <div className="difference__container"></div>
      <div className="difference__container__title">
        <label className="difference__container__title__numberlabel">
          {number}
        </label>
        <span className="difference__container__title__content">{title}</span>
      </div>
      <p className="difference__container__desc">{children}</p>
    </div>
  );
};

Difference.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
};

export default Difference;
