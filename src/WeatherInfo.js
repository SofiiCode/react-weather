import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
 
  return (
    <div className="row current-city-container shadow">
      <div className="col">
        <h1 className="current-city">{props.data.city}</h1>
        <p className="day">
          <FormatedDate date={props.data.date} />
        </p>
      </div>
      <div className="col">
        <div className="weather-container">
          <img
            src={props.data.icon}
            className="currentEmoji"
            alt="icon"
            width="65px"
          />
          <p className="weather ">{props.data.description}</p>
        </div>
      </div>
      <div className="col weather-description-container">
        <div>
          <h1 className="current-temp">{props.data.temp}</h1>
          <span> °С</span>
        </div>
        <div className="description-container">
          <p className="weather-description">
            <span>Humidity: {props.data.humidity} %</span> <br />
            <span>Wind:{props.data.wind} km/h</span>
          </p>
        </div>
      </div>
      <div className="weather-forecast">
        <div className="col-2">
          <p>Day</p>
          <img src={props.data.icon} alt="" width="65px"></img>
          <p>12 °C</p>
        </div>
        <div className="col-2">
          <p>Day</p>
          <img src={props.data.icon} alt="" width="65px"></img>
          <p>12 °C</p>
        </div>
        <div className="col-2">
          <p>Day</p>
          <img src={props.data.icon} alt="" width="65px"></img>
          <p>12 °C</p>
        </div>
        <div className="col-2">
          <p>Day</p>
          <img src={props.data.icon} alt="" width="65px"></img>
          <p>12 °C</p>
        </div>
        <div className="col-2">
          <p>Day</p>
          <img src={props.data.icon} alt="" width="65px"></img>
          <p>12 °C</p>
        </div>
      </div>
    </div>
  );
}
