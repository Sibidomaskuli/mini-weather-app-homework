import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import Footer from "./Footer";
import axios from "axios"; 
import "./Forecast.css";

export default function Forecast (props){
 const [ city, setCity ] = useState(props.defaultCity);
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
  

 function displayResult (response) {
    setWeatherData({
    temperature: Math.round(response.data.main.temp),
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
    city: response.data.name,
    description: response.data.weather[0].description,
    date: new Date(response.data.dt*1000),
    iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",   
   });
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
        <WeatherInfo data={weatherData} />
      </div>
      <Footer />
    </div>
  );
}

            