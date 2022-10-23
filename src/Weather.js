import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather (props){
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(`${props.defaultCity}`);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: `${response.data.name}, ${response.data.sys.country}:`,
      temp: `${Math.round(response.data.main.temp)} `,
      humidity: response.data.main.humidity,
      wind: ` ${Math.round(response.data.wind.speed)}`,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });

    console.log(response);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search(){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6876f80c7fdc4d4f6b847b1ddd6523b8&units=metric`;
    axios.get(url).then(handleResponse);
  }
   function getApi(event) {
     event.preventDefault();
    search()
   }

  if (weatherData.ready) {
    return (
      <div className="container ">
        <form
          className="input-city row"
           onSubmit={getApi}
        >
          <div className="col">
            <input
              className="form-control shadow"
              type="search"
              onChange={updateCity}
              placeholder="Type a city..."
            />
          </div>
          <div className="col buttons">
            <input
              type="submit"
              value="Search"
              className="btn btn-search shadow"
            />

            <button className="btn btn-current shadow">Current</button>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search()
    return <p>Loading...</p>;
  }
}