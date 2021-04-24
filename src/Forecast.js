import React from "react"; 

export default function Forecast(){
    return (
     <div className="card">
      <div className="card-body">
       <div className="col-2">
        <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        >
        </img>
        <span className="temperature">
        17 {""}</span>
        <span className="Units">
         °C |°F
        </span>
       </div>
      </div>
     </div>
)
}

            