import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherSecondSection.css";

export default function WeatherSecondSection() {
  return (
    <div className="row">
      <div className="col-2 dayTemperature">
        <ul className="atmosphere">
          <li className="showImage">
            <WeatherIcon code="snow-day" size={35} />{" "}
          </li>
          <br />
          <li className="temp">
            <span className="temperature-max">30°</span>{" "}
            <span className="temperature-min">20°</span>
          </li>
          <li className="day">Monday</li>
        </ul>
      </div>
      <div className="col-2 dayTemperature">
        <ul className="atmosphere">
          <li className="showImage">
            <WeatherIcon code="snow-day" size={35} />{" "}
          </li>
          <br />
          <li className="temp">
            <span className="temperature-max">30°</span>{" "}
            <span className="temperature-min">20°</span>
          </li>
          <li className="day">Tuesday</li>
        </ul>
      </div>
      <div className="col-2 dayTemperature">
        <ul className="atmosphere">
          <li className="showImage">
            {" "}
            <WeatherIcon code="snow-day" size={35} />{" "}
          </li>
          <br />
          <li className="temp">
            <span className="temperature-max">30°</span>{" "}
            <span className="temperature-min">20°</span>
          </li>
          <li className="day">Wednesday</li>
        </ul>
      </div>
      <div className="col-2 dayTemperature">
        <ul className="atmosphere">
          <li className="showImage">
            <WeatherIcon code="snow-day" size={35} />{" "}
          </li>
          <br />
          <li className="temp">
            <span className="temperature-max">30°</span>{" "}
            <span className="temperature-min">20°</span>
          </li>
          <li className="day">Thursday</li>
        </ul>
      </div>
      <div className="col-2 dayTemperature">
        <ul className="atmosphere">
          <li className="showImage">
            <WeatherIcon code="snow-day" size={35} />{" "}
          </li>
          <br />
          <li className="temp">
            <span className="temperature-max">30°</span>{" "}
            <span className="temperature-min">20°</span>
          </li>
          <li className="day">Friday</li>
        </ul>
      </div>
    </div>
  );
}
