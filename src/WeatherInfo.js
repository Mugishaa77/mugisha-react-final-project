import React from "react";
import DateComponent from "./DateComponent";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo (props) {
    return (<div className = "WeatherInfo">
          <div className="">
            {props.data.city}
          <DateComponent date={props.data.date} />
          </div>
        
        <div >
            <WeatherIcon code={props.data.icon} size={52} />
            {props.data.description}
        </div>
            
        <div class="d-flex justify-content-evenly flex-row mb-3 ">
            <div class="p-2"><WeatherTemperature celcius = {props.data.temperature} /></div>
            <div class="p-2">Wind: {Math.round(props.data.wind)} km/h</div>
            <div class="p-2"> Humidity: {props.data.humidity}%</div>
        </div>
                
            
                
                
         

           
                     
                   
                       
                         
           

        
        </div>);
}