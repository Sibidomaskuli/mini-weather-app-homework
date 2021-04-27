import React from "react";
import "./Footer.css"; 

export default function Footer (){
  return (
    <div className="Footer">
      <footer>
          Brain- stormed by <em>Shirin Eldris</em> 🤖, { "" }
          <a
            href="https://github.com/Sibidomaskuli/mini-weather-app-homework"
            className="purple"
            target="-blank"
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
  );
}
