import React from "react";
import TodaysDate from "./TodaysDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <h1> 📍{props.info.city}</h1>
        <h5>
          <TodaysDate date={props.info.date} />
        </h5>
        <ul>
          <li>
            <WeatherIcon code={props.info.icon} size={150} />
          </li>

          <li className="temperature">
            <WeatherTemperature celsius={props.info.temperature} />
          </li>
          <li className="today text-capitalize"> {props.info.description}</li>
        </ul>
        <div className="row first">
          <div className="col-3 main-information ">
            <ul className="atmosphere ">
              <li className="atmo">
                {" "}
                {props.info.wind} <span className="atmo_wind">km/h</span>
              </li>
              <li> Wind</li>
            </ul>
          </div>
          <div className="col-3 main-information ">
            <ul className=" atmosphere ">
              <li className="atmo"> {props.info.humidity} %</li>
              <li> Humidity </li>
            </ul>
          </div>
          <div className="col-3 main-information ">
            <ul className="atmosphere ">
              <li className="atmo">{Math.round(props.info.feels_like)} °C</li>
              <li>Feels like</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
