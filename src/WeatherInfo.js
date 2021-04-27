import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Converter from "./Converter"; 

export default function WeatherInfo(props) {
 return (
  <div className="WeatherInfo">
   <div className="container">
    <div className="row">
     <div className="col-6">
      <div className="Clearfix">
       <div className="float-left">
        <WeatherIcon
         code={props.data.icon} />
       </div>       
      </div>
      <Converter celsius={props.data.temperature}/>
      
      <ul className="Forecasting">
       <li>Atmospheric Pressure: {props.data.pressure} hPa</li>
       <li>Humidity: {props.data.humidity} %</li>
       <li>Wind: {props.data.wind} km/h</li>
      </ul>
     </div>
     <div className="col-6">
      <ul className="cityName">
       <li>{props.data.city}</li>
       <li><FormattedDate date={props.data.date} /></li>
       <li>{props.data.description}</li>
      </ul>
     </div>
    </div>
   </div>
  </div>
 );
}