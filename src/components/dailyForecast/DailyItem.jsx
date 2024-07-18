import React from "react";

const DailyItem = ({ data, getIcon }) => {
  const getDayName = (time) => {
    const date = new Date(time * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <div className="dailySingleInfo">
      <p>{getDayName(data.dt)}</p>
      <p>
        {data.main.temp}
        <span className="unit">°c</span>
      </p>
      <img src={getIcon(data.weather[0].icon)} alt="" />
    </div>
  );
};

export default DailyItem;
