import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherSecondSection.css";

export default function WeatherSecondSection(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "4a8t3d05dbfa7f7fdo930d8b30371c1b";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col-2 dayTemperature" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}
