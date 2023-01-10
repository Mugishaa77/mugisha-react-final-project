import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay (props) {
    function maxTemp () {
        let temp = props.data.temp.max;
        let maximumTemp = Math.round(temp);

        return maximumTemp;
    }

    function minTemp () {
        let temp=props.data.temp.min;
        let minimumTemp = Math.round(temp);

        return minimumTemp;
    }


   function day () {
    let date = new Date (props.data.dt * 1000);
    let newDay = date.getDay ();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
   

    return days[newDay];


   }

    return (
        <div className="WeatherForecastDay">
            <div> {day()} </div>

            <WeatherIcon code={props.data.weather[0].icon} size={36} />

            <div className="temp">
            <span className="high">{maxTemp()}°C</span>/
             <span className = "low">{minTemp()}°C</span>
            </div>
            </div>
        
    );
}