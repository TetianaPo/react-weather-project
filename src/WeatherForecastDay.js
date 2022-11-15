import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <ul className="atmosphere">
        <li className="showImage">
          <WeatherIcon code={props.data.condition.icon} size={35} />{" "}
        </li>
        <br />
        <li className="temp">
          <span className="temp-max">{maxTemperature()}</span>{" "}
          <span className="temp-min"> {minTemperature()}</span>
        </li>
        <li className="day">{day()}</li>
      </ul>
    </div>
  );
}
