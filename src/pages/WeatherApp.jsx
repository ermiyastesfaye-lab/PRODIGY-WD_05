import React, { useEffect, useState } from "react";
import fetchWeatherData from "../api/weatherAPI";
import CurrentWeather from "../components/currentWeather/CurrentWeather";
import DailyForecast from "../components/dailyForecast/DailyForecast";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { currentWeatherData, dailyForecastData, error } =
        await fetchWeatherData("Ethiopia");

      if (error) {
        setError(error);
        setIsLoading(false);
        setWeatherData(null);
        setDailyData(null);
      } else {
        setWeatherData(currentWeatherData);
        setDailyData(dailyForecastData);
        setIsLoading(false);
        setError("");
      }
    };
    fetchData();
  }, [error]);

  const handleSearch = async () => {
    const { currentWeatherData, dailyForecastData, error } =
      await fetchWeatherData(city);

    if (error) {
      setError(error);
      setIsLoading(false);
      setWeatherData(null);
      setDailyData(null);
    } else {
      setWeatherData(currentWeatherData);
      setDailyData(dailyForecastData);
      setIsLoading(false);
      setError("");
    }
  };

  const getIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };
  return (
    <>
      <main>
        <div className="head">
          <h1 className="title">Weather App</h1>
          <div className="search">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City name"
            />
            <button type="button" onClick={handleSearch}>
              <i className="bi bi-search"></i>
            </button>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
        {isLoading ? (
          <h1 className="">Loading...</h1>
        ) : (
          <div>
            <div>
              {weatherData && (
                <CurrentWeather weatherData={weatherData} getIcon={getIcon} />
              )}
            </div>
            <div>
              {dailyData && (
                <DailyForecast dailyData={dailyData} getIcon={getIcon} />
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default WeatherApp;
