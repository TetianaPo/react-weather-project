import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit ");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="tempNow">{Math.round(props.celsius)}</span>{" "}
        <span className="unit">
          °C |
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="tempNow">{Math.round(fahrenheit())}</span>{" "}
        <span className="unit">
          <a href="/" onClick={convertToCelcius}>
            °C{" "}
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
