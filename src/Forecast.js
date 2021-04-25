import React, { useState } from "react";
import axios from "axios"; 
import Footer from "./Footer";
import "./Forecast.css";

export default function Forecast (){
 const [ city, setCity ] = useState( null );
 const [ weatherData, setWeatherData ] = useState({});

 function updateCity ( event ){
  setCity( event.target.value );
 }

 function handleSubmit ( event ) {
  event.preventDefault();
  const key = "61de322b4c57e14ee5306e572d84bdb5";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ key }&units=metric`;
  axios.get( url ).then( displayResult );
 }

 function displayResult ( response ) {
   console.log( response.data );
   let iconCode = response.data.weather[0].icon;
		let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
   setWeatherData( {
    temperature:  Math.round( response.data.main.temp ),
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
    city: response.data.main.name,
    description: response.data.weather[ 0 ].description,
    icon: <img src={iconUrl} alt={response.data.weather[0].description} />,
   
  })
 }
 return (
    <div className="card">
      <div className="card-body">
        <h3>Weather Search App</h3>
        <form onSubmit={handleSubmit}>
    <div className="row">
     <div className="col-10">
      <input
       type="search"
       placeholder="Enter a city.."
       className="form-control"
       autoFocus="on"
       onChange={updateCity}
      />
     </div>
     <div className="col-2">
      <input type="submit"
       value="Search"
       className="btn btn-success w-100" />
     </div>
    </div>
   </form>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="Clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/${weatherData.icon}.png"
                  alt="Sunny"
                  className="float-left"
                />
              </div>
              <span className="temperature">
                <strong>{weatherData.temperature} {""}</strong>
              </span>
              <span className="Units">°C |°F</span>
              <ul className="Forecasting">
              <li>Precipitation: 1%</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
            </div>
            <div className="col-6">
            <ul className="cityName">
        <li>{weatherData.city}</li>
              <li>Saturday 18:00</li>
        <li>{weatherData.description}</li>
            </ul>
            </div>
          </div>
 
        </div>
      </div>
 
      <Footer />
    </div>    
  );
}

            