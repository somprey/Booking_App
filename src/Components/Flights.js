import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Hotels from "./Hotels";

function Flight() {
  return (
    <div>
      <Hotels />
      <Hero hero="flightsHero" />
      <Footer></Footer>
    </div>
  );
}

export default Flight;
