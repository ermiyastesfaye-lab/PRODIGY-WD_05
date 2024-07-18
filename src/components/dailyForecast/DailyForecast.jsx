import React from "react";
import DailyItem from "./DailyItem";
import "./dailyForecast.css";

const DailyForecast = ({ dailyData, getIcon }) => {
  return (
    <div className="dailyMain">
      <div className="dailyInfoIcon">
        <i className="bi bi-clock"></i>
        <p>HOURLY FORECAST</p>
      </div>
      <hr />
      <div className="dailyInfo">
        {dailyData.list.map((data, idx) => {
          return <DailyItem key={idx} getIcon={getIcon} data={data} />;
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
