import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather (){
//     function handleResponse(response){
//         console.log(response)
//     }
//    function getApi(event) {
//      event.preventDefault();
//      let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=6876f80c7fdc4d4f6b847b1ddd6523b8&units=metric`;
//      axios.get(url).then(handleResponse);
 //   } 
   return (
     <div className="container">
       <form className="input-city row">
         <div className="col">
           <input
             className="form-control shadow"
             id="input"
             value="Kyiv"
             placeholder="Type a city..."
           />
         </div>
         <div className="col buttons">
           <button type="submit" id="search" className="btn btn-search shadow">
             Search
           </button>
           <button id="current" className="btn btn-current shadow">
             Current
           </button>
         </div>
       </form>
       <div className="row current-city-container shadow">
         <div className="col">
           <h1 className="current-city" id="city"></h1>
           <p id="day"></p>
         </div>
         <div className="col">
           <div className="weather-container">
             <img
               src="#"
               className="currentEmoji"
               id="current-img"
               alt=""
               width="65px"
             />
             <p id="weather"></p>
           </div>
         </div>
         <div className="col weather-description-container">
           <div>
             <h1 id="current-temp"></h1>
             <span>°С</span>
           </div>
           <div className="description-container">
             <p className="weather-description">
               Humidity: <span id="humidity"></span> % <br />
               Wind: <span id="wind"></span> m/s
             </p>
           </div>
         </div>
         <div className="weather-forecast" id="forecast"></div>
       </div>
       <div className="coder">
         This project was coded by Sofiia Andrusyshyn and is open-soursed on{" "}
         <a href="https://github.com/SofiiCode/Weather-project.git">GitHub</a>{" "}
       </div>
     </div>
   );
}