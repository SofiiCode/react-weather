import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
export default function WeatherInfo(props) {
 console.log(props.data.coord);
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
        <WeatherTemperature celcius={props.data.temp} />

        <div className="description-container">
          <p className="weather-description">
            <span>Humidity: {props.data.humidity} %</span> <br />
            <span>Wind:{props.data.wind} km/h</span>
          </p>
        </div>
      </div>
      <WeatherForecast data= {props.data.icon} coord={props.data.coord}/>
    </div>
  );
}
