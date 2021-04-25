import React from "react";
import "./Search.css";

export default function Search () {
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