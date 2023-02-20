import React, { useState, useEffect } from "react";
import DayLengthCard from "./../DayLengthCard/DayLengthCard";
import sunMoon from "./../../assets/img/dayLength/sun-moon.png";
import dayImage from "./../../assets/gif/sun.gif"
import nightImage from "./../../assets/gif/moon.gif"

function DayLength({ city, theme }) {
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [dayLength, setDayLength] = useState("");
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=465dbba8f85b0e33c44fcc44669d31f3`
        );

        const data = await response.json();

        setSunrise(new Date(data.sys.sunrise * 1000).toLocaleTimeString());
        setSunset(new Date(data.sys.sunset * 1000).toLocaleTimeString());
        setDayLength(
          new Date((data.sys.sunset - data.sys.sunrise) * 1000)
            .toISOString()
            .substr(11, 8)
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (city !== "") {
      fetchWeatherData();
    }
  }, [city]);
  useEffect(() => {
    const now = new Date();
    setIsDay(now > sunrise && now < sunset);
  }, [sunrise, sunset]);

  return (
    <DayLengthCard
      theme={theme}
      sunrise={sunrise}
      sunset={sunset}
      dayLength={dayLength}
      sunMoon={sunMoon}
      isDay={isDay}
      dayImage={dayImage}
      nightImage={nightImage}
    />
  );
}

export default DayLength;
