import React from "react";
import "./css/Button.css";

const Button = ({ onClick, link, children }) => {
  if (onClick) {
    return (
      <button
        className="button__container"
        type="submit"
        onSubmit={() => {
          onClick();
        }}
      >
        {children}
      </button>
    );
  } else {
    return (
      <div className="Button">
        <a className="button__container" href={link}>
          {children}
        </a>
      </div>
    );
  }
};

export default Button;
