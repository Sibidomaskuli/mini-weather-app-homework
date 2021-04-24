import React from "react";
import "./Search.css";

export default function Search () {
 return (
  <div className="Search">
   <form>
    <div className="row">
     <div className="col-9">
      <input
       type="search"
       placeholder="Enter a city.."
       className="form-control"
      />
     </div>
      <input type="submit"
       value="Search"
       className="btn btn-primary" />
     </div>
    </div>
   </form>
  </div>
 );
}