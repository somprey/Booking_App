import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import axios from "axios";

function Flight() {
  const [startAirport, setStartAirport] = useState();
  const [endAirport, setEndAirport] = useState();
  const [startDate, setstartDate] = useState();
  const [endDate, setEndDate] = useState();

  const fetchFlights = async (endAirport, startAirport, startDate, endDate) => {
   

var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/GHS/en-US/SFO-sky/JFK-sky/2020-11-30',
  params: {inboundpartialdate: '2020-11-15'},
  headers: {
    'x-rapidapi-key': 'd030dc7e0cmsh3c7f2f835c26c91p141019jsn01774bc83181',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) { 
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

};

useEffect( () => {
  fetchFlights()
}, [])

  return (
    <div>
      <Hero hero="flightsHero" form="flight" />
    </div>
  );
}

export default Flight;
