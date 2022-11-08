import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleresponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      feels_like: response.data.temperature.feels_like,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png`,
      condition: response.data.condition.icon,
      date: "Nov 8, 7:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="firstSection">
          <form>
            <div className="row d-flex justify-content-end search-engine">
              <div className="col-7"></div>
              <div className="col-3">
                <input
                  type="search"
                  placeholder="Type a city... "
                  className="submit w-100"
                  autoFocus="on"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-70"
                />
              </div>
            </div>
          </form>
          <h1> 📍{weatherData.city}</h1>
          <h5> {weatherData.date}</h5>
          <ul>
            <li>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.condition}
                className="image"
              />
            </li>
            <li className="temperature">
              {" "}
              {Math.round(weatherData.temperature)} <p className="unit">°C </p>
            </li>
            <li className="today text-capitalize">
              {" "}
              {weatherData.description}
            </li>
          </ul>
          <div className="row first">
            <div className="col-3 main-information ">
              <ul className="atmosphere ">
                <li>icon </li>
                <li className="atmo"> {weatherData.wind} km/h</li>
                <li> Wind</li>
              </ul>
            </div>
            <div className="col-3 main-information ">
              <ul className=" atmosphere ">
                <li>icon </li>
                <li className="atmo"> {weatherData.humidity} %</li>
                <li> Humidity </li>
              </ul>
            </div>
            <div className="col-3 main-information ">
              <ul className="atmosphere ">
                <li>icon </li>
                <li className="atmo">
                  {Math.round(weatherData.feels_like)} °C
                </li>
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
  } else {
    const apiKey = "4a8t3d05dbfa7f7fdo930d8b30371c1b";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleresponse);
    return "Loading...";
  }
}
