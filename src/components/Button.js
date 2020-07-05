import React from "react";
import "./css/Button.css";

const Button = (props) => {
  if (props.onClick) {
    return (
      <button
        className="button__container"
        type="submit"
        onSubmit={() => {
          props.onClick();
        }}
      >
        {props.cont}
      </button>
    );
  } else {
    return (
      <div className="Button">
        <a className="button__container" href={props.link}>
          {props.cont}
        </a>
      </div>
    );
  }
};

export default Button;
