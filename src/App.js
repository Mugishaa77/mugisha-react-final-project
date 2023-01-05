import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Mugisha's Weather App</h1>
      
      <Weather />
      
      <footer>
        This project was coded by Mugisha and is {" "}
      <a href="https://github.com/Mugishaa77/mugisha-react-final-project"
      target="_blank"
      rel="noreferrer"> {" "}open-sourced on github</a>
      </footer>
      
      </div>
    </div>
  );
}


