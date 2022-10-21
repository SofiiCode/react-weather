import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather (){
    const [ready, setReady] = useState(false)
//  const [city, setCity] = useState("");
 const [temp, setTemp] = useState(null);
 const [titlle, setTitlle] = useState("");
 const [humidity, setHumidity] = useState(null);
 const [desc, setDesc] = useState("");
 const [wind, setWind] = useState(null);
 const [icon, setIcon] = useState("");

 function handleResponse(response) {
   
   setTemp(`${Math.round(response.data.main.temp)} `);
   setTitlle(`${response.data.name}, ${response.data.sys.country}:`);
   setHumidity(` ${response.data.main.humidity}`);
   setDesc(`${response.data.weather[0].description} `);
   setWind(` ${Math.round(response.data.wind.speed)}`);
   setIcon(
     `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
   );
    setReady(true);
   console.log(response);
 }
   if (ready) {
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
             <p className="day"></p>
           </div>
           <div className="col">
             <div className="weather-container">
               <img src={icon} className="currentEmoji" alt="" width="65px" />
               <p className="weather">{desc}</p>
             </div>
           </div>
           <div className="col weather-description-container">
             <div>
               <h1 className="current-temp">{temp}</h1>
               <span>°С</span>
             </div>
             <div className="description-container">
               <p className="weather-description">
                 <span>Humidity: {humidity}</span> <br />
                 <span>Wind:{wind}km/h</span>
               </p>
             </div>
           </div>
           <div className="weather-forecast">
             <div className="col-2">
               <p>Day</p>
               <img src={icon} alt="" width="65px"></img>
               <p>12 C</p>
             </div>
             <div className="col-2">
               <p>Day</p>
               <img src={icon} alt="" width="65px"></img>
               <p>12 C</p>
             </div>
             <div className="col-2">
               <p>Day</p>
               <img src={icon} alt="" width="65px"></img>
               <p>12 C</p>
             </div>
             <div className="col-2">
               <p>Day</p>
               <img src={icon} alt="" width="65px"></img>
               <p>12 C</p>
             </div>
             <div className="col-2">
               <p>Day</p>
               <img src={icon} alt="" width="65px"></img>
               <p>12 C</p>
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
     let city = "london"
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6876f80c7fdc4d4f6b847b1ddd6523b8&units=metric`;
        axios.get(url).then(handleResponse);
     return <p>Loading...</p>;
   }
     
         
}