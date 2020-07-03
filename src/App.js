import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Carousel />
    </Fragment>
  );
};

export default App;
