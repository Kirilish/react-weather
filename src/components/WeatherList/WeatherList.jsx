import React from "react";
import WeatherCard from "./../WeatherCard/WeatherCard";

function WeatherList({ forecast, theme }) {
  const dailyForecasts = forecast.list
    .filter((weather, index) => index % 8 === 0)
    .slice(0, 6);

  return (
    <div className="weather">
      <h2 className="weather_title">{forecast.city.name}</h2>
      <div className="weather_block">
        {dailyForecasts.map((weather) => (
          <WeatherCard theme={theme} key={weather.dt} weather={weather} />
        ))}
      </div>
    </div>
  );
}

export default WeatherList;
