import React, { useEffect, useState } from "react";
import Day from "../../components/Day/Day";
import DayInfo from "../../components/DayInfo/DayInfo";
import DayLength from "../../components/DayLength/DayLength";
import Weather from "../../components/Weather/Weather";

function InfoBlock({ city, theme }) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?appid=465dbba8f85b0e33c44fcc44669d31f3&q=${city}&lang=ru&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    };
    if (city) {
      fetchData();
    }
  }, [city]);
  
  return (
    <div>
      <div className="info_block">
        <Day weather={weather} city={city} theme={theme} />
        <DayInfo weather={weather} city={city} theme={theme} />
      </div>
      <div>
        <DayLength city={city} theme={theme} />
        <h2>Погода на: </h2>
        <Weather weather={weather} theme={theme} city={city} />
      </div>
    </div>
  );
}

export default InfoBlock;
