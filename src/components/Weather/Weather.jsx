import React, { useState } from "react";
import WeatherList from "../WeatherList/WeatherList";
import WeatherListDay from "../WeatherListDay/WeatherListDay";

function Weather({ city, theme }) {
  const [forecast, setForecast] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  async function getForecast() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&appid=465dbba8f85b0e33c44fcc44669d31f3&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setForecast(data);
    setHourlyForecast(null);
  }

  async function getForecastDay() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&appid=465dbba8f85b0e33c44fcc44669d31f3&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setHourlyForecast(data);
    setForecast(null);
  }

  function clearForecast() {
    setForecast(null);
    setHourlyForecast(null);
  }
  
  return (
    <div className="weather_management">
      <button className="weather_btn" onClick={getForecast}>Пять дней</button>
      <button className="weather_btn" onClick={getForecastDay}>День</button>
      <button className="weather_btn" onClick={clearForecast}>Отчистить</button>
      {forecast ? <WeatherList theme={theme} forecast={forecast} /> : <div></div>}
      {hourlyForecast ? <WeatherListDay theme={theme} hourlyForecast={hourlyForecast} /> : <div></div>}
    </div>
  );
}

export default Weather;
