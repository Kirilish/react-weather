import React from "react";
import WeatherCardDay from "../WeatherCardDay/WeatherCardDay";

function WeatherListDay({ hourlyForecast, theme }) {
  const hourlyForecastsDay = hourlyForecast.list.slice(0, 8);

  return (
    <div className="weather">
      <h2 className="weather_title">{hourlyForecast.city.name}</h2>
      <div className="weather_block">
        {hourlyForecastsDay.map((weather) => (
          <WeatherCardDay theme={theme} key={weather.dt} weather={weather} />
        ))}
      </div>
    </div>
  );
}

export default WeatherListDay;
