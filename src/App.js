import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal";
import Differences from "./components/Differences";
import Promo from "./components/Promo";
import Footer from "./components/Footer";

const App = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  if (show) {
    document.body.classList.add("block-overflow");
  }
  if (!show) {
    document.body.classList.remove("block-overflow");
  }
  return (
    <Fragment>
      <Modal closeModal={closeModal} show={show} />
      <Navbar openModal={openModal} closeModal={closeModal} show={show} />
      <Hero />
      <Differences />
      <Carousel />
      <Promo />
      <Footer />
    </Fragment>
  );
};

export default App;
