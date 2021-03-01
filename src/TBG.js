import React from "react";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./App.css";

function TBG() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/footer" component={Footer} />
    </div>
  );
}

export default TBG;
