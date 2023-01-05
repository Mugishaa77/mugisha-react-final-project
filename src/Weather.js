import React, { useState } from "react";
import DateComponent from "./DateComponent";
import axios from "axios";
import "./Weather.css";


 export default function Weather (props) {
    const [ready, setReady] = useState (false);
    const [weatherData, setWeatherData]= useState ({});

    function handleResponse (response){
        
        setWeatherData ({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date (response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`


        });
        setReady(true);
    }

    if (ready) {
        return (
  <div className = "Weather">
    <form>
        <div className="row">
            <div className="col-9">
            <input type="text" placeholder="Enter city here" className="form-ctrl" autoFocus = "on"/>
        </div>
        <div className = "col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>
        </div>
        </div>
    </form>

    <div className="row">
        <div className = "col-4">
            <ul>
                <li>
                    <img src={weatherData.icon} alt={weatherData.description} />
                </li>
                <li>
                    Temperature: {Math.round(weatherData.temperature)}
                </li>
                <li className="text-capitalize">
                 {weatherData.description}
                </li>
            </ul>
        </div>
        <div className = "col-4">
            Wind: {Math.round(weatherData.wind)} km/h
        </div>
        <div className = "col-4">
            Humidity: {weatherData.humidity}%
        </div>
        
    </div>
    
    <div className = "row">
        <div className = "col-4">
            <ul>
                <li>
                    <h1>
                        City
                    </h1>
                </li>
                <li>
                    <h4>
                        <DateComponent date={weatherData.date} /></h4> </li>
            </ul>
        </div>
        <div className = "col-8">
            <h2>
                Weather forecast
            </h2>
            
            <div className= "row">
                <div className = "col-2">
                    Day 1
                </div>
                <div className = "col-2">
                    Day 2
                </div>
                <div className = "col-2">
                    Day 3
                </div>
                <div className = "col-2">
                    Day 4
                </div>
                <div className = "col-2">
                    Day 5
                </div>
                <div className = "col-2">
                    Day 6
                </div>
            </div>
        </div>
    </div>
    </div>
  ); 

    } else {
    const apiKey = "be3f1b23a531fefa41599ea3eeb7401d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }

    
  
 }