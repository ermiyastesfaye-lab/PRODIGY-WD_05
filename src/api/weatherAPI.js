const fetchWeatherData = async (city) => {
  const API_KEY = "af6cdb4257d89e2861361f70c3ab37dd";
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const dailyURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${API_KEY}&units=metric`;
  try {
    let [currentWeatherData, dailyForecastData] = await Promise.all([
      fetch(weatherURL),
      fetch(dailyURL),
    ]);

    if (!currentWeatherData.ok || !dailyForecastData.ok) {
      throw new Error("City not found");
    }
    currentWeatherData = await currentWeatherData.json();
    dailyForecastData = await dailyForecastData.json();
    console.log([currentWeatherData, dailyForecastData]);
    return {
      currentWeatherData,
      dailyForecastData,
      error: null,
    };
  } catch (err) {
    return {
      currentWeatherData: null,
      dailyForecastData: null,
      error: err.message,
    };
  }
};

export default fetchWeatherData;
