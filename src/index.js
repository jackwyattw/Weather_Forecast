import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import WeatherForecast from "./components/WeatherForecast";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <WeatherForecast />
  </React.StrictMode>,
  rootElement
);
