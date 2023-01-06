import React from "react";
import DateComponent from "./DateComponent";

export default function WeatherInfo (props) {
    return (<div className = "WeatherInfo">
        <div className="row">
        <div className = "col-4">
            <ul>
                <li>
                    <img src={props.data.icon} alt={props.data.description} />
                </li>
                <li>
                    Temperature: {Math.round(props.data.temperature)}
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