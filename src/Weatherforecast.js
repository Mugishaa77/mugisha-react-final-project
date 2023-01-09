import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props){
    
    function handleResponse (response) {
        console.log(response.data)

    }

    let apiKey = "be3f1b23a531fefa41599ea3eeb7401d";
    let latitude =  props.coord.lat;
    console.log(latitude)
    
    let longitude =  props.coord.lon;
    console.log(longitude)
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return ( 
        <div className = "WeatherForecast">
            
            <h2>
                Weather forecast
            </h2>
            
            <div className= "row">
                <div className = "col">
                    <div className="day">
                        Day 1
                    </div>
                    <WeatherIcon code="50n" size={36} />
                    
                    <div className="temp">
                        <span className="high">22</span>/
                        <span className = "low">15</span>
                    </div>
                    
                </div>
                <div className = "col">
                    Day 2
                </div>
                <div className = "col">
                    Day 3
                </div>
                <div className = "col">
                    Day 4
                </div>
                <div className = "col">
                    Day 5
                </div>
                
            </div>
        </div>
    
    );
}