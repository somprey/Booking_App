import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Flight from "./Flights";

function Hotels() {
  return (
    <div>
      <Flight />
      <Hero hero="hotelsHero" children="hotelChild" />;<Footer></Footer>
    </div>
  );
}

export default Hotels;
