import React from "react";
import "./Weather.css";


 export default function Weather () {
  return (
  <div className = "Weather">
    <form>
        <div className="col-9">
            <input type="text" placeholder="Enter city here" className="form-ctrl"/>
        </div>
        <div className = "col-3">
            <input type="submit" value="Search" className="btn"/>
        </div>
        
    </form>
    <h1>City</h1>
    <ul>
        <li>Day and date</li>
        <li>Description</li>
    </ul>
    <div className = "row">
        <div className = "col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt = "weather symbol" />
        </div>
        <div className = "col-6">
            <ul>
                <li>Preciptitation</li>
                <li>humidity</li>
                <li>wind</li>
            </ul>
        </div>
    </div>
    </div>
  ); 
 }