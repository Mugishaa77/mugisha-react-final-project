import React from "react";
import DateComponent from "./DateComponent";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {
    return (<div className = "WeatherInfo">
        <div className="row">
        <div className = "col-4">
            <ul>
                <li>
                    <WeatherIcon code={props.data.icon} />
                </li>
                <li>
                    <WeatherTemperature celcius = {props.data.temperature} />
                    
                </li>
                <li className="text-capitalize">
                 {props.data.description}
                </li>
            </ul>
        </div>
        <div className = "col-4">
            Wind: {Math.round(props.data.wind)} km/h
        </div>
        <div className = "col-4">
            Humidity: {props.data.humidity}%
        </div>
        
    </div>
    
    <div className = "row">
        <div className = "col-4">
            <ul>
                <li>
                    <h1>
                        {props.data.city}
                    </h1>
                </li>
                <li>
                    <h4>
                        <DateComponent date={props.data.date} /></h4> </li>
            </ul>
        </div>
    </div>
    </div>);
}