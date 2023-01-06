import React, { useState } from "react";

export default function WeatherTemperature (props) {
    const [unit, setUnit] = useState ("metrics");
    function convertToFh (event) {
        event.preventDefault ();
        setUnit("fahrenheit");
    }

    function convertToCelcius (event) {
        event.preventDefault ();
        setUnit("celcius");
    }



    if (unit === 'celcius') {
    return (
        <div classsName = "WeatherTemperature" >
           <span>
            Temperature: {Math.round(props.celcius)}
            <span className="units">°C |
            <a href = "/"
            onClick = {convertToFh}> °F</a></span> 
            

           </span>
        </div>
    );
    } else {
        let fahrenheit = (props.celcius * 9)/5 + 32;
       return (
        <div classsName = "WeatherTemperature" >
           <span>
            Temperature: {Math.round(fahrenheit)}
            <span className="units">
                <a href = "/"
            onClick = {convertToCelcius}>°C </a>|
             °F</span> 
            

           </span>
        </div>
    ); 
    }
    }