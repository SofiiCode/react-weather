import React, {useState} from "react";
 import "./WeatherForecast.css";
 import axios from "axios";

export default function WeatherForecast (props){
    const [weatherForecastData, setWeatherForecastData] = useState({});

    function handleResponse(response){
console.log(response)
        setWeatherForecastData({
          minTemp: `${Math.round(response.data.daily[0].temp.min)}`,
          maxTemp: `${Math.round(response.data.daily[0].temp.max)}`,
          icon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`,
        });
    

    }
    let lon= props.coord.lon;
    let lat= props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=c95d60a1e3adbeb286133f1ebebc2579&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="weather-forecast">
        <div className="col-2">
          <p>Day</p>
          <img src={weatherForecastData.icon} alt="" width="45px"></img>
          <div>
            <span>{weatherForecastData.maxTemp}°</span>
            <span className="weatherForecast-min">
              {weatherForecastData.minTemp}°
            </span>
          </div>
        </div>
      </div>
    );
}