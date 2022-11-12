import React from "react";

export default function WeatherSecondSection(props) {
  return (
    <div className="WeatherSecondSection">
      <div className="row">
        <div className="col-2 dayTemperature">
          <ul className="atmosphere">
            <li className="showImage"></li>
            <br />
            <li className="temp">25 °C</li>
            <li className="day">Monday</li>
          </ul>
        </div>
        <div className="col-2 dayTemperature">
          <ul className="atmosphere">
            <li className="showImage"></li>
            <br />
            <li className="temp">25 °C</li>
            <li className="day">Tuesday</li>
          </ul>
        </div>
        <div className="col-2 dayTemperature">
          <ul className="atmosphere">
            <li className="showImage"> </li>

            <br />
            <li className="temp">25 °C</li>
            <li className="day">Wednesday</li>
          </ul>
        </div>
        <div className="col-2 dayTemperature">
          <ul className="atmosphere">
            <li className="showImage"></li>
            <br />
            <li className="temp">25 °C</li>
            <li className="day">Thursday</li>
          </ul>
        </div>
        <div className="col-2 dayTemperature">
          <ul className="atmosphere">
            <li className="showImage"></li>
            <br />
            <li className="temp">25 °C</li>
            <li className="day">Friday</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
