import React from "react";

export default function WeatherTemperature (props) {
    return (
         <div className = "WeatherTemperature" >
           <span>
            Temperature: {Math.round(props.celcius)}°C
           </span>
        </div>

    );
    }
       

        

                
        
            

        
    
    