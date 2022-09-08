import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast.js"

// const WeatherForecast = (props) => {
//   return(
//     <div class="weather">
//         <img src="http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg" alt=""/>
//         <p><span>conditions:</span> sunny</p>
//         <p>{props.conditions}</p>
//         <p>{props.time}</p>
//         <p>{props.time}</p>
//     </div>
//   )
// }

// const weatherArr = (props) => {
//   return props.weather.map(weather =>
//     )
// }

export default function App() {
  console.log(weatherData)
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 

   <WeatherForecast weather={weatherData}/>
     
    </div>
  );
}
