import React from "react";
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
            <input type="submit" value="Search" className="btn btn-primary"/>
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
                <li>
                    <h2>Day and date</h2> </li>
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
 }