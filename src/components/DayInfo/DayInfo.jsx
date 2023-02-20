import React from "react";
import ContentLoader from "react-content-loader";
import DayInfoCard from "../DayInfoCard/DayInfoCard";
import temp from "./../../assets/icon/day_info/temp.svg";
import pressure from "./../../assets/icon/day_info/pressure.svg";
import precipitation from "./../../assets/icon/day_info/precipitation.svg";
import winter from "./../../assets/icon/day_info/winter.svg";

function DayInfo({ weather, props, theme }) {
  if (!weather.main)
    return (
      <div>
        {" "}
        <ContentLoader
          speed={2}
          width={400}
          height={300}
          viewBox="0 0 400 300"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="20" y="40" rx="0" ry="0" width="1000" height="20" />
          <rect x="24" y="100" rx="0" ry="0" width="1000" height="20" />
          <rect x="24" y="160" rx="0" ry="0" width="1000" height="20" />
          <rect x="24" y="220" rx="0" ry="0" width="1000" height="20" />
        </ContentLoader>
      </div>
    );

  let pressureDescription;
  if (weather.main.pressure <= 750) {
    pressureDescription = "плохое";
  } else if (weather.main.pressure > 751 && weather.main.pressure <= 900) {
    pressureDescription = "нормальное";
  } else {
    pressureDescription = "хорошее";
  }

  return (
    <div className={`info_${theme}`}>
      <DayInfoCard
        icon={temp}
        item="Температура"
        text={weather.main.temp}
        info=" ощущаеться как "
        itemText={weather.main?.feels_like}
      />
      <DayInfoCard
        icon={pressure}
        item="Давление "
        text={weather.main.pressure}
        info=" мм ртутного столба - "
        itemText={pressureDescription}
      />
      <DayInfoCard
        icon={precipitation}
        item="Погодные условия"
        text={weather.weather[0].description}
      />
      <DayInfoCard
        icon={winter}
        item="Ветер"
        text={weather.wind.speed}
        itemText="m/s"
      />
    </div>
  );
}

export default DayInfo;
