import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import DayCard from "../DayCard/DayCard";
import clearImg from "./../../assets/img/day/sun.png";
import RainImg from "./../../assets/img/day/rain.png";
import CloudsImg from "./../../assets/img/day/cloud.png";
import SnowImg from "./../../assets/img/day/snow.png";

function Day({ weather, city, props, theme }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currentTime = time.toLocaleTimeString();

  let weatherImg = null;
  if (weather.weather) {
    const { main } = weather.weather[0];
    if (main === "Clear") {
      weatherImg = clearImg;
    } else if (main === "Rain") {
      weatherImg = RainImg;
    } else if (main === "Clouds") {
      weatherImg = CloudsImg;
    } else if (main === "Snow") {
      weatherImg = SnowImg;
    }
  }
  if (!weather.main) {
    return (
      <ContentLoader
        speed={2}
        width={400}
        height={300}
        viewBox="0 0 400 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="20" y="20" rx="0" ry="0" width="204" height="100" />
        <circle cx="300" cy="65" r="50" />
        <rect x="24" y="140" rx="0" ry="0" width="180" height="40" />
        <rect x="24" y="196" rx="0" ry="0" width="180" height="80" />
      </ContentLoader>
    );
  }

  return (
    <DayCard
      currentTime={currentTime}
      weather={weather.main.temp}
      weatherImg={weatherImg}
      city={city}
      theme={theme}
    />
  );
}

export default Day;
