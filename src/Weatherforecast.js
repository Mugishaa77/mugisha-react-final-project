import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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