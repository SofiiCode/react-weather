import React, {useState, useEffect} from "react";
 import "./WeatherForecast.css";
 import axios from "axios";
import ForecastDay  from "./ForecastDay";

export default function WeatherForecast (props){
    const [loaded, setLoaded] = useState(false)
    const [Forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    function load(){
       let lon = props.coord.lon;
       let lat = props.coord.lat;
       let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=c95d60a1e3adbeb286133f1ebebc2579&units=metric`;
       axios.get(apiUrl).then(handleResponse);
    }
    if(loaded){
        return (
          <div className="weather-forecast">
            <div className="row weather-forecast-day">
              {Forecast.map(function (DailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="col-2 " key={index}>
                      <ForecastDay data={DailyForecast} />
                    </div>
                  );
                }else{
                  return null
                }
              })}
            </div>
          </div>
        );
    }else{
      load()
      return null;
       
    }
    
    
}