import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

import axios from "axios";

//import { Provider } from 'react-redux';

//import store from './redux/store';

export const fetchFlights = (endAirport, startAirport, startDate, endDate) => {
  return async (dispatch) => {
    try {
      const flights = await axios({
        url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${startAirport}/${endAirport}/${startDate}/${endDate}`,
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d030dc7e0cmsh3c7f2f835c26c91p141019jsn01774bc83181",
        },
      });
      dispatch(getFlights(flights.data));
    } catch (error) {
      console.log(error);
    }
  };

  const mapState = (state) => {
    return {
      flights: state.flight,
    };
  };

  const mapDispatch = (dispatch) => {
    return {
      getFlights: (endAirport, startAirport, startDate, endDate) =>
        dispatch(fetchFlights(endAirport, startAirport, startDate, endDate)),
    };
  };

  export default connect(mapState, mapDispatch)(SingleTrip);
};

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
