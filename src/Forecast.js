import React from "react";
import "./Forecast.css";
import Search from "./Search";
import Footer from "./Footer";

export default function Forecast(){
  return (
    <div className="card">
      <div className="card-body">
        <h3>Weather Search App</h3>
        <Search />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="Clearfix">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="Sunny"
                  className="float-left"
                />
              </div>
              <span className="temperature">
                <strong>17 {""}</strong>
              </span>
              <span className="Units">°C |°F</span>
              <ul className="Forecasting">
              <li>Precipitation: 1%</li>
              <li>Humidity: 34%</li>
              <li>Wind: 16km/h</li>
            </ul>
            </div>
            <div className="col-6">
            <ul className="cityName">
              <li>Bracknagh, County Offaly</li>
              <li>Saturday 18:00</li>
              <li>Sunny</li>
            </ul>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>    
  );
}

            