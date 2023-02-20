import React from "react";

function DayInfoCard({icon, item, text, info, itemText}) {
  return (
    <div className="info_block">
      <img className="info_img" src={icon} alt="" />
      <h4 className="info_item">{item}</h4>
      <p className="info_text">{text}{info}{itemText}</p>
    </div>
  );
}

export default DayInfoCard;
