import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let now = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let today = days[now.getDay()];
  let theHours = now.getHours();
  theHours = ("0" + theHours).slice(-2);
  let theMinutes = now.getMinutes();
  theMinutes = ("0" + theMinutes).slice(-2);
    return (
    <div>
      {today} {theHours}:{theMinutes}
    </div>
  );
}
