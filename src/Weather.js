import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherSecondSection from "./WeatherSecondSection";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.condition.icon,

      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "4a8t3d05dbfa7f7fdo930d8b30371c1b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleresponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="firstSection">
          <form onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-end  search-engine">
              <div className="col-4"></div>
              <div className="col-5">
                <input
                  type="search"
                  placeholder="Type a city... "
                  className="submit w-100"
                  autoFocus="on"
                  onChange={cityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-70"
                />
              </div>
            </div>
          </form>
          <WeatherInfo info={weatherData} />
        </div>
        <div className="secondSection">
          <WeatherSecondSection />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
