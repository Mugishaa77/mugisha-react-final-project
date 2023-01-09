import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState (false);
    const [forecast, setForecast] = useState (null);

    
    function handleResponse (response) {
        setForecast(response.data.daily);
        console.log(response.data.daily);
        setLoaded(true);
    }
            
 if (loaded) {
    return ( 
        <div className = "WeatherForecast">
            
            <h2>
                Weather forecast
            </h2>
            
            <div className= "row">
                <div className = "col">
                    <WeatherForecastDay data={forecast[0]} />
               </div>
            </div>
        </div>
    
    )   

 } else {
    let apiKey = "be3f1b23a531fefa41599ea3eeb7401d";
    let latitude =  props.coord.lat;
    let longitude =  props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
    
    
    
}
}