import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1> 📍 Kyiv</h1>
        <h5> Nov 4, 5:00</h5>
        <ul>
          <li>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny Weather"
              className="image"
            />
          </li>
          <li className="temperature"> 21 °C </li>
          <li className="today"> Sunny</li>
        </ul>
        <div className="row first">
          <div className="col-3 main-information ">
            <ul className="atmosphere ">
              <li>icon </li>
              <li> 15 km/h</li>
              <li> Wind</li>
            </ul>
          </div>
          <div className="col-3 main-information ">
            <ul className=" atmosphere ">
              <li>icon </li>
              <li> 25%</li>
              <li> Humidity</li>
            </ul>
          </div>
          <div className="col-3 main-information ">
            <ul className="atmosphere ">
              <li>icon </li>
              <li>5%</li>
              <li>Chance of rain</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="secondSection">
        <div className="row">
          <div className="col-2 dayTemperature">
            <ul className="atmosphere">
              <li>🌞</li>
              <br />
              <li className="temp">25 °C</li>
              <li className="day">Monday</li>
            </ul>
          </div>
          <div className="col-2 dayTemperature">
            <ul className="atmosphere">
              <li>🌞</li>
              <br />
              <li className="temp">25 °C</li>
              <li className="day">Tuesday</li>
            </ul>
          </div>
          <div className="col-2 dayTemperature">
            <ul className="atmosphere">
              <li>🌞</li>
              <br />
              <li className="temp">25 °C</li>
              <li className="day">Wednesday</li>
            </ul>
          </div>
          <div className="col-2 dayTemperature">
            <ul className="atmosphere">
              <li>🌞</li>
              <br />
              <li className="temp">25 °C</li>
              <li className="day">Thursday</li>
            </ul>
          </div>
          <div className="col-2 dayTemperature">
            <ul className="atmosphere">
              <li>🌞</li>
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
