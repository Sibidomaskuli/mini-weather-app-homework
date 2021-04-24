import React from "react"; 
import Forecast from "./Forecast";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container"> 
      <h2>Weather Search App</h2>
      <Forecast />
      <footer>
        Made by <em>Shirin Eldris</em> 🤖 and is <a
          href="https://github.com/Sibidomaskuli/mini-weather-app-homework"
          target="-blank"
          >
            open-sourced on GitHub
        </a>
        </footer>
        </div>
    </div>
  );
}


