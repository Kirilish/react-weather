import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ListOfTask from "./pages/ListOfTask/ListOfTask";

function App() {
  const [city, setCity] = useState("Минск");
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App_${theme}`}>
      <div className="container">
        <Header setCity={setCity} toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home city={city} theme={theme} />} />
          <Route path="/task" element={<ListOfTask city={city} theme={theme} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
