import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./Weatherforecast";
import axios from "axios";
import "./Weather.css";


 export default function Weather (props) {
    const [ready, setReady] = useState (false);
    const [weatherData, setWeatherData]= useState ({});
    const [city, setCity] = useState (props.defaultCity);

    function handleResponse (response){
        
        setWeatherData ({
          coord: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date (response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      city: response.data.name
      


        });
        setReady(true);
    }

    function search () {
       const apiKey = "be3f1b23a531fefa41599ea3eeb7401d";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

    }
         function handleSubmit (event) {
            event.preventDefault ();
            search();

         }

         function handleCityChange (event) {
            setCity(event.target.value);
         }


    if (ready) {
        return (
          <div className="parent">
  <div className = "Weather">
    <form onSubmit = {handleSubmit}>
      <div className="d-flex align-items-start">
        <div className="row">
          <div className="col">
            <input type="text" placeholder="Enter city here" className="form-ctrl" autoFocus = "on"
            onChange = {handleCityChange}/>
        </div>
        <div className="col">
            <input type="submit" value="Search" className="btn btn-primary"/>
        </div>
        </div>
  
            
        </div>
      
        
    </form>
    <WeatherInfo data={weatherData} />   
    <WeatherForecast coord={weatherData.coord} />
    </div>
    </div>
    
  ); 

    } else {
     search ();
    return "Loading...";
    }

    
  
 }