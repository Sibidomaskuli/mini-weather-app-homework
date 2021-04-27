import React from "react"; 
import Forecast from "./Forecast";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Forecast defaultCity="Cairo" /> 
      </div>
      <div style={{backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F852658141930745508%2F&psig=AOvVaw065_wdJAd8EYifwNEOD2QZ&ust=1619639357040000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDnpfaYn_ACFQAAAAAdAAAAABAD")`}}></div>
    </div>
  );
}