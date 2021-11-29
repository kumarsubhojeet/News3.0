import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {

    
  const [temp, settemp] = useState([]);
  const [loc , setloc] = useState([]);

//   const [latitude , setlat] = useState();
//   const [longitude , setlong] = useState();

const KEY = process.env.REACT_APP_WEATHER_KEY

   var options = {
    method: 'GET',
    url: 'https://yahoo-weather5.p.rapidapi.com/weather',
    params: {lat: "43.000000" , long: "-75.000000" , format: 'json', u: 'c'},
    headers: {
      'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
      'x-rapidapi-key': '12b146e3c2msh9a9a36435111e78p14aac1jsn9458bad564c8'
    }
  };

  const WeatherAPI = async () => {
    try {
      const res = await axios.request(options);
      settemp(res.data.current_observation.condition);
      setloc(res.data.location)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    WeatherAPI();
  }, []);

  return(
      <>
     <div className="weather_details">
     <p>{temp.temperature} <sup>o</sup> C</p>
      <p>{loc.city}</p>
      <p>{loc.country}</p>
     </div>
      </>
  )
}
