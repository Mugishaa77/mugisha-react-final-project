import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";


 export default function Weather () {
  return (
  <div className = "Weather">
    <form>
        <div className="row">
            <div className="col-9">
            <input type="text" placeholder="Enter city here" className="form-ctrl"/>
        </div>
        <div className = "col-3">
            <input type="submit" value="Search" className="btn"/>
        </div>
        </div>
    </form>

    <div className="row">
        <div className = "col-4">
            <ul>
                <li>
                    <img src="" alt=""/>
                </li>
                <li>
                    Temperature
                </li>
                <li>
                    Description
                </li>
            </ul>
        </div>
        <div className = "col-3">
            Wind
        </div>
        <div className = "col-2">
            Humidity
        </div>
        <div className = "col-3">
            Precipitation
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
                <li> Day and date</li>
            </ul>
        </div>
        <div className = "col-8">
            Weather forecast
        </div>
    </div>
    </div>
  ); 
 }