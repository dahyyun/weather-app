export const resolvers = {
  Query: {
    currentWeather: async (_, { city }) => {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`,
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`,
        ),
      ]);
      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();
      return {
        city: weatherData.name,
        country: weatherData.sys.country,
        population: forecastData.city.population,
        dt: weatherData.dt,
        temp: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        humidity: weatherData.main.humidity,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        windSpeed: weatherData.wind.speed,
      };
    },
    forecast: async (_, { city }) => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`,
      );
      const data = await res.json();
      return data.list.map((item) => {
        return {
          dtTxt: item.dt_txt,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          tempMin: item.main.temp_min,
          tempMax: item.main.temp_max,
        };
      });
    },
  },
};
