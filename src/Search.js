import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search (){
 const [ city, setCity ] = useState( null );
 const [ weather, setWeather ] = useState({});
 
 function updateCity ( event ){
  setCity( event.target.value ); 
 }
 
 function handleSubmit ( event ){
  event.preventDefault();
  const key = "61de322b4c57e14ee5306e572d84bdb5";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ key }&units=metric`;
  axios.get( url ).then( displayResult );
}

 function displayResult ( response ){
  console.log( response.data );
  let iconCode = response.data.weather[ 0 ].icon;
  let iconUrl = `https://openweathermap.org/img/wn/${ iconCode }@2x.png`;
  setWeather( {
   icon: response.data.weather[ 0 ].icon,
   temperature:  Math.round( response.data.main.temp ),
   humidity: response.data.main.humidity,
   wind: Math.round(response.data.wind.speed),
   city: response.data.main.name,
   description: response.data.weather[ 0 ].description,
  })
 
 }
  
 return (
   <div className="Search">  

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
  </div>
 );
}