import React, { useState, useEffect } from "react";
import logo from "./../../assets/img/header/logo.png";
import themeImg from "./../../assets/img/header/SunTheme.png";
import themeImgActive from "./../../assets/img/header/MoonTheme.png";
import { Link } from "react-router-dom";

function Header({ setCity, toggleTheme, theme }) {
  const [username, setUsername] = useState(localStorage.getItem("username") || '');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    localStorage.setItem("username", e.target.value);
  };

  return (
    
    <div className={`header_${theme}`}>
      <div className="header_block">
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Link to={"/"}>
            <div className="wrapper_title">React weather</div>
          </Link>
        </div>
        <div className="wrapper">
          <div className="wrapper_scheduler">
            <Link to={"/task"}>
              <p className={`wrapper_neonText_${theme}`}>Список задач</p>
            </Link>
          </div>
          <div className="wrapper_theme">
            <img
              onClick={toggleTheme}
              src={theme === "light" ? themeImg : themeImgActive}
              alt="Toggle Theme"
            />
            <input
              className={`wrapper_city_${theme}`}
              type="text"
              placeholder="Минск"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={`header_name_${theme}`}>
        <p>Привет,</p>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="[Введите имя]"
        />
      </div>
    </div>
  );
}

export default Header;
