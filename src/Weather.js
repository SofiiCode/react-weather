import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatedDate from "./FormatedDate"
export default function Weather (props){
   
 const [weatherData, setWeatherData] = useState({ready:false});
 const [titlle, setTitlle] = useState("");


 function handleResponse(response) {
   
   setWeatherData({
     ready: true,

     temp: `${Math.round(response.data.main.temp)} `,
     humidity: response.data.main.humidity,
     wind: ` ${Math.round(response.data.wind.speed)}`,
     description: response.data.weather[0].description,
     icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
     date: new Date(response.data.dt * 1000)
   });
   setTitlle(`${response.data.name}, ${response.data.sys.country}:`);
   
   
    
   console.log(response);
 }
   if (weatherData.ready) {
     return (
       <div className="container ">
         <form
           className="input-city row"
           //  onSubmit={getApi}
         >
           <div className="col">
             <input
               className="form-control shadow"
               type="search"
               //    onChange={updateCity}
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
         <div className="row current-city-container shadow">
           <div className="col">
             <h1 className="current-city">{titlle}</h1>
             <p className="day">
               <FormatedDate date={weatherData.date} />
             </p>
           </div>
           <div className="col">
             <div className="weather-container">
               <img
                 src={weatherData.icon}
                 className="currentEmoji"
                 alt=""
                 width="65px"
               />
               <p className="weather ">{weatherData.description}</p>
             </div>
           </div>
           <div className="col weather-description-container">
             <div>
               <h1 className="current-temp">{weatherData.temp}</h1>
               <span> °С</span>
             </div>
             <div className="description-container">
               <p className="weather-description">
                 <span>Humidity: {weatherData.humidity} %</span> <br />
                 <span>Wind:{weatherData.wind} km/h</span>
               </p>
             </div>
           </div>
           <div className="weather-forecast">
             <div className="col-2">
               <p>Day</p>
               <img src={weatherData.icon} alt="" width="65px"></img>
               <p>12 °C</p>
             </div>
             <div className="col-2">
               <p>Day</p>
               <img src={weatherData.icon} alt="" width="65px"></img>
               <p>12 °C</p>
             </div>
             <div className="col-2">
               <p>Day</p>
               <img src={weatherData.icon} alt="" width="65px"></img>
               <p>12 °C</p>
             </div>
             <div className="col-2">
               <p>Day</p>
               <img src={weatherData.icon} alt="" width="65px"></img>
               <p>12 °C</p>
             </div>
             <div className="col-2">
               <p>Day</p>
               <img src={weatherData.icon} alt="" width="65px"></img>
               <p>12 °C</p>
             </div>
           </div>
         </div>
       </div>
     );
   } else {
     //  function getApi(event) {
     //    event.preventDefault();
     //    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6876f80c7fdc4d4f6b847b1ddd6523b8&units=metric`;
     //    axios.get(url).then(handleResponse);
     //  }

     //  function updateCity(event) {
     //    setCity(event.target.value);
     //  }
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=6876f80c7fdc4d4f6b847b1ddd6523b8&units=metric`;
        axios.get(url).then(handleResponse);
     return <p>Loading...</p>;
   }
     
         
}