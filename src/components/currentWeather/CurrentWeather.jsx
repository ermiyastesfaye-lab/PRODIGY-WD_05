import React from "react";
import "./currentWeather.css";

const CurrentWeather = ({ weatherData, getIcon }) => {
  return (
    <div className="currentInfo">
      <div className="mainInfo">
        <img src={getIcon(weatherData.weather[0].icon)} alt="" />
        <h1 className="temp">
          {weatherData.main.temp}
          <span className="unit">°c</span>
        </h1>
        <p className="description">{weatherData.name}</p>
        <p className="description">{weatherData.weather[0].description}</p>
      </div>
      <div className="additionalInfo">
        <div className="singleInfo">
          <div className="infoIcon">
            <i className="bi bi-thermometer"></i>
            <p>FEELS LIKE</p>
          </div>
          <p>
            {weatherData.main.feels_like}
            <span className="unit">°c</span>
          </p>
        </div>
        <div className="singleInfo">
          <div className="infoIcon">
            <i className="bi bi-wind"></i>
            <p>WIND SPEED</p>
          </div>
          <p>
            {weatherData.wind.speed}
            <span className="unit">m/s</span>
          </p>
        </div>
        <div className="singleInfo visibility">
          <div className="infoIcon">
            <i className="bi bi-eye"></i>
            <p>VISIBILITY</p>
          </div>
          <p>
            {weatherData.visibility}
            <span className="unit">m</span>
          </p>
        </div>
        <div className="singleInfo">
          <div className="infoIcon">
            <i className="bi bi-droplet"></i>
            <p>HUMIDITY</p>
          </div>
          <p>
            {weatherData.main.humidity}
            <span className="unit">%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
