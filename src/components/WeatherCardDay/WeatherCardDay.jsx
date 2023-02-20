import React from "react";
import sun from "./../../assets/img/wether/sun.png";
import rain from "./../../assets/img/wether/rain.png";
import clouds from "./../../assets/img/wether/clouds.png";
import snow from "./../../assets/img/wether/snow.png";
import cloudSun from "./../../assets/img/wether/cloud_sun.png";
import ifCloud from "./../../assets/img/wether/if-cluds.png"

function WeatherCardDay({ weather, theme }) {
  const date = new Date(weather.dt * 1000);
  const time = new Date(weather.dt * 1000).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dayOfDate = date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const temp = weather.main.temp;
  const humidity = weather.main.humidity;
  const windSpeed = weather.wind.speed;
  const weatherDescription = weather.weather[0].description;
  console.log(weather);

  let cardImg = null;
  if (weather.weather) {
    const { description } = weather.weather[0];
    if (description.includes("небольшой снег")) {
      cardImg = snow;
    } else if (description.includes("ясно")) {
      cardImg = sun;
    } else if (description.includes("пасмурно")) {
      cardImg = clouds;
    } else if (description.includes("дождь")) {
      cardImg = rain;
    } else if (description.includes("облачно с прояснениями")) {
      cardImg = cloudSun;
    } else if (description.includes("переменная облачность")) {
      cardImg = ifCloud;
    }
  }

  return (
    <div className={`weather_card_${theme}`}>
      <h3 className="weather_info">{time}</h3>
      <h4 className="weather_info_day">{dayOfDate}</h4>
      <div className="weather_info_img">
        <img src={cardImg} alt="weatherImg" />
      </div>
      <div className="weather_info_info">
        <p className="weather_info_name">
          Температура: <span className="weather_info_desc">{temp}°C </span>
        </p>
        <p className="weather_info_name">
          Влажность: <span className="weather_info_desc">{humidity}%</span>
        </p>
        <p className="weather_info_name">
          Ветер: <span className="weather_info_desc"> {windSpeed} m/s</span>
        </p>
        <p className="weather_info_name">
          Погодные условия:{" "}
          <span className="weather_info_desc">{weatherDescription}</span>
        </p>
      </div>
    </div>
  );
}

export default WeatherCardDay;
