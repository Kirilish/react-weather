import React from "react";
import InfoBlock from "../../container/InfoBlock/InfoBlock";

function Home({ city, theme }) {
  return (
    <div className={`home_${theme}`}>
      <InfoBlock city={city} theme={theme} />
    </div>
  );
}

export default Home;
