// import React from 'react';
// import weatherData from './weatherData';

const WeatherForecast = (props)=> {
    return  (
        <div>
            {props.weather?.map(weatherData => {
            return(<> <img src={weatherData.img}/>
                <h4>conditions: {weatherData.conditions}</h4>
                <h4>time:{weatherData.time}</h4> </>)
            })}
        </div> 
        
    )

    {/* // let renderedData = props.weatherData.map((weather, index)=> (
    //     <weatherData message={weather} key={index}/>
    // )) */}
}

export default WeatherForecast;