import React from "react";
import "./Forecast.css";

export default function Forecast(){
    return (
     <div className="card">
      <div className="card-body">
       <div className="row justify-contents-around">
       <div className="col">
        <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        >
        </img>
        <span className="temperature">
        17 {""}</span>
        <span className="Units">
         °C |°F
        </span>
        <div className="col">
         <ul className="Forecasting">
          <li>Precipitation: 1%</li>
          <li>Humidity: 34%</li>
          <li>Wind: 16 km/h</li>
         </ul>
        </div>
       </div>
       </div>
      </div>
     </div>
)
}

            