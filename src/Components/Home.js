import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

function Home() {
  const newStyle = {
    color: "blue",
  };

  return (
    <>
      <travelDate />
      <Hero hero="defaultHero" />
      <div className="container ">
        <div className="row-pt-3" />
        <div className="col-md-3 border" />
        <div className="bg-primary" />
        <ul className="homelinks">
          <Link style={newStyle} to="/flights">
            <li list>Flights</li>
          </Link>
          <Link style={newStyle} to="/hotels">
            <li>Hotels</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Home;
