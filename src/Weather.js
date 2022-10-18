import React from "react";
import axios from "axios";

export default function Weather (){
    function handleResponse(response){
        console.log(response)
    }
   function getApi(event) {
     event.preventDefault();
     let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=6876f80c7fdc4d4f6b847b1ddd6523b8&units=metric`;
     axios.get(url).then(handleResponse);
   } 
   return (
     <div>
       <form onSubmit={getApi}>
         <input
           type="search"
           placeholder="Enter a city"
           autoFocus={true}
         ></input>
         <input type="submit" value="Search"></input>
       </form>
     </div>
   );
}