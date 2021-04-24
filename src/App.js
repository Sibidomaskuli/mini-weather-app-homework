import React from "react"; 
import Forecast from "./Forecast";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Forecast />
        <footer>
          Brain- stormed by <em>Shirin Eldris</em> 🤖, { "" }
          <a
            href="https://github.com/Sibidomaskuli/mini-weather-app-homework"
            className="purple"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub,
                </a>
          <a href="#"
            className="green"
            target="_blank"
            rel="noopener noreferrer"
          > Netlify hosted
          </a>
        </footer>
      </div>
    </div>
  );
}


