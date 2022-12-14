import React from "react";
import "./WeatherForecast.css";

export default function ForecastDay(props) {
    
 function minTemp (){
    return `${Math.round(props.data.temp.min)}`;
 };
  function maxTemp (){
    return  `${Math.round(props.data.temp.max)}`;
 };
  function day (){
    let date = new Date(props.data.dt *1000);
    let day = date.getDay();
    let days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];
    return days[day]
  }
       let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
   
       return (
        <div >
          <p>{day()}</p>
          <img src={iconUrl} alt="" width="45px"></img>
          <div>
            <span>{maxTemp()}°</span>
            <span className="weatherForecast-min">{minTemp()}°</span>
          </div>
        </div>
    );
}
