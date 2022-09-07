import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast"

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <WeatherForecast/>
    </div>
  );
}
