import React from "react";
import "./Forecast.css";
import Search from "./Search";

export default function Forecast(){
  return (
    <div className="card">
      <div className="card-body">
        <h2>Weather Search App</h2>
        <Search />
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <div className="col">
                <img className="float-left"
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                >
                </img>
                <span className="temperature">
                  17 { "" }</span>
                <span className="Units">
                  °C |°F
        </span>
                <ul className="Forecasting">
                  <li>Precipitation: 1%</li>
                  <li>Humidity: 34%</li>
                  <li>Wind: 16 km/h</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-6">
              <ul className="cityName">
                <li>Bracknagh, County Offaly</li>
                <li>Saturday 18:00</li>
                <li>Sunny</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

            