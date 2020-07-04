import React from "react";
import "./css/Button.css";

const Button = (props) => {
  return (
    <div className="Button">
      <a
        className="button__container"
        href={props.link && props.link}
        onClick={
          props.onClick &&
          (() => {
            props.onClick();
          })
        }
      >
        {props.cont}
      </a>
    </div>
  );
};

export default Button;
