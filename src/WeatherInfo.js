import React from "react";
import DateComponent from "./DateComponent";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";


export default function WeatherInfo (props) {
    return (<div className = "WeatherInfo">
           <div className="main-display">
            <div className="city">
              {props.data.city}
            </div>
            <div className="date">
              <DateComponent date={props.data.date} />
            </div>
            </div>
            
          
          
        
        <div className="displayIcon">
            <WeatherIcon code={props.data.icon} size={52} />
            <br/>
            <div className="text-capitalize">
              <strong>
                 {props.data.description}
              </strong>
             
            </div>
            
          
        </div>
            
        <div class="d-flex justify-content-evenly flex-row mb-3 ">
          <strong>
            <div class="p-2"><WeatherTemperature celcius = {props.data.temperature} /></div>
            <div class="p-2">Wind: {Math.round(props.data.wind)} km/h</div>
            <div class="p-2"> Humidity: {props.data.humidity}%</div>
          </strong>
            
        </div>
                
            
                
                
         

           
                     
                   
                       
                         
           

        
        </div>);
}