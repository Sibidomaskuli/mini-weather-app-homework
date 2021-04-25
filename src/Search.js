import React from "react";
import axios from "axios";
import "./Search.css";

export default function Search (){
 function displayCoordinates ( response ) {
  console.log( response.data );
  console.log( response.data[ 0 ].lat );
  console.log( response.data[ 0 ].lon );
 }
 const apiKey = "61de322b4c57e14ee5306e572d84bdb5";
 let city = "London, UK";
 let url = `https://api.openweathermap.org/geo/1.0/direct?q=${ city }&limit=5&appid=${ apiKey }&units=metric`;
 axios.get( url ).then( displayCoordinates );

 return (
   <div className="Search">


    


   <form>
    <div className="row">
     <div className="col-10">
      <input
       type="search"
       placeholder="Enter a city.."
       className="form-control"
       autoFocus="on"
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