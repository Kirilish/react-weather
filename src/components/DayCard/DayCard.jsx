import React from "react";

function DayCard({ weather, city, weatherImg, currentTime, theme}) {
  return (
    <div className={`day_${theme}`}>
      <div className="day_top">
        <div className="day_top_info">
          <h4 className="day_temp">{weather}°</h4>
          <h4 className={`day_today_${theme}`}>Сегодня</h4>
        </div>
        <div className="day_img">
          <img src={weatherImg} alt="weather" />
        </div>
      </div>
      <div className="day_bottom">
        <p className="day_time">Время: {currentTime}</p>
        <p>Город: {city}</p>
      </div>
    </div>
  );
}

export default DayCard;
