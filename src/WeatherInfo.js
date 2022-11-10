import React from "react";
import TodaysDate from "./TodaysDate";

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
            <img
              src={props.info.iconUrl}
              alt={props.info.condition}
              className="image"
            />
          </li>
          <li className="temperature">
            {" "}
            {Math.round(props.info.temperature)} <p className="unit">°C </p>
          </li>
          <li className="today text-capitalize"> {props.info.description}</li>
        </ul>
        <div className="row first">
          <div className="col-3 main-information ">
            <ul className="atmosphere ">
              <li>icon </li>
              <li className="atmo"> {props.info.wind} km/h</li>
              <li> Wind</li>
            </ul>
          </div>
          <div className="col-3 main-information ">
            <ul className=" atmosphere ">
              <li>icon </li>
              <li className="atmo"> {props.info.humidity} %</li>
              <li> Humidity </li>
            </ul>
          </div>
          <div className="col-3 main-information ">
            <ul className="atmosphere ">
              <li>icon </li>
              <li className="atmo">{Math.round(props.info.feels_like)} °C</li>
              <li>Feels like</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="secondSection">
        <div className="row">
          <div className="col-2 dayTemperature">
            <ul className="atmosphere">
              <li className="showImage">🌞</li>
              <br />
              <li className="temp">25 °C</li>
              <li className="day">Monday</li>
            </ul>
          </div>
          <div className="col-2 dayTemperature">
            <ul className="atmosphere">
              <li className="showImage">🌞</li>
              <br />
              <li className="temp">25 °C</li>
              <li className="day">Tuesday</li>
            </ul>
          </div>
          <div className="col-2 dayTemperature">
            <ul className="atmosphere">
              <li className="showImage">🌞</li>
              <br />
              <li className="temp">25 °C</li>
              <li className="day">Wednesday</li>
            </ul>
          </div>
          <div className="col-2 dayTemperature">
            <ul className="atmosphere">
              <li className="showImage">🌞</li>
              <br />
              <li className="temp">25 °C</li>
              <li className="day">Thursday</li>
            </ul>
          </div>
          <div className="col-2 dayTemperature">
            <ul className="atmosphere">
              <li className="showImage">🌞</li>
              <br />
              <li className="temp">25 °C</li>
              <li className="day">Friday</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
