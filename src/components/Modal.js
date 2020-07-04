import React, { Fragment } from "react";
import "./css/Modal.css";
import ReactDOM from "react-dom";

function Modal(props) {
  const { show, closeModal } = props;

  const modal = (
    <div className="modal__container">
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <div className="modal__container__links">
          <a href="./#pricing">Pricing</a>
          <a href="./#product">Product</a>
          <a href="./#about">About Us</a>
          <a href="./#careers">Careers</a>
          <a href="./#community">Community</a>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal-root"));
}

export default Modal;
