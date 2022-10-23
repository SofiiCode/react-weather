import React, { useState } from "react";
export default function WeatherTemperature(props){
    const [unit,setUnit]= useState("celsius")
    function convertToFar(event){
        event.preventDefault();
        setUnit("fahrenheit")

    }
     function convertToCelsius(event) {
       event.preventDefault();
       setUnit("celsius");
     } 
    if(unit === "celsius"){
        return (
          <div>
            <h1 className="current-temp">{props.celcius}</h1>
            <span>
              {" "}
             °С | <a href="/" onClick={convertToFar}>°F</a>
            </span>
          </div>
        );
    }else{
        let farTemp = (props.celcius*5/9) +32
        return (
          <div>
            <h1 className="current-temp">{Math.round(farTemp)}</h1>
            <span>
              {" "}
              <a href="/" onClick={convertToCelsius}>°С </a>| °F
            </span>
          </div>
        );
    }
    
}