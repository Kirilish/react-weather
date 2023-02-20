import React from "react";

function DayInfoCard({
  theme,
  sunrise,
  sunset,
  dayLength,
  sunMoon,
  isDay,
  dayImage,
  nightImage,
}) {
  return (
    <div className={`length_wrapper_${theme}`}>
      <div className="length_container">
        {theme === "light" && !isDay ? (
          <img src={ dayImage} alt="Moon" className="length_image" />
        ) : null}
        {theme === "light" && isDay ? (
          <img src={nightImage} alt="Sun" className="length_image" />
        ) : null}
      </div>
      <div className="length_top">
        <p className="length_title">Световой день</p>
        <p className="length_time"><strong>{dayLength}</strong></p>
      </div>
      <div className="length_img">
        <img src={sunMoon} alt="sunmoon" />
      </div>
      <div className="length_bootom">
        <div className="length_bootom_block">
          <p className="length_title">Восход</p>
          <p className="length_time"><strong>{sunrise}</strong></p>
        </div>
        <div className="length_bootom_block">
          <p className="length_title">Закат</p>
          <p className="length_time"><strong>{sunset}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default DayInfoCard;
