import React, { useState } from "react";

export default function Converter(props) {
  const [unit, setUnit]=useState("celsius");
  function displayFahren(event) {
    event.preventDefault();
    setUnit("fahrenheit");
 }
 
 function displayCelsius(event) {
  event.preventDefault();
  setUnit("celsius");
 }

 function fahrenheit() {
  return (props.celsius * 9) /5 + 32;
 }
  
  if (unit==="celsius") {
  return (
    <span>
      <span className="temperature">
        <strong>{Math.round(props.celsius)} {""}</strong>
      </span>
      <span className="Units">°C |
      <a href="/"
          onClick={displayFahren}>
          °F</a>
      </span>
    </span>
    );
  } else {
   return (
    <span>
     <span className="temperature">
      <strong>{Math.round(fahrenheit)} {""}</strong>
     </span>
     <span className="Units">°C |
        <a href="/"
       onClick={displayFahren}>
       °C </a> {""}
        | °F
        </span>
    </span>
   );
  }
}

