import { useRouter } from "next/router";
import { useQuery } from "@apollo/client/react";
import { GET_CURRENT_WEATHER, GET_FORECAST } from "../lib/graphql/queries";
import { useState } from "react";

export default function CityPage() {
  const router = useRouter();
  const { city } = router.query;
  const { data: weatherData, loading: weatherLoading } = useQuery(
    GET_CURRENT_WEATHER,
    {
      variables: { city: city },
      skip: !city,
    },
  );
  const { data: forecastData, loading: forecastLoading } = useQuery(
    GET_FORECAST,
    {
      variables: { city: city },
      skip: !city,
    },
  );
  const [openDate, setOpenDate] = useState(null);

  if (weatherLoading || forecastLoading) return <div>Loading . . .</div>;

  const groupedForecast = forecastData?.forecast.reduce((acc, item) => {
    const date = item.dtTxt.split(" ")[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const formatTime = (dtTxt) => {
    const time = dtTxt.split(" ")[1];
    const [hour, minute] = time.split(":");
    const h = parseInt(hour);
    const ampm = h >= 12 ? "pm" : "am";
    const h12 = h % 12 || 12;
    return `${h12}:${minute}${ampm}`;
  };

  return (
    <div>
      <h1>{city}</h1>
      {weatherData && (
        <div>
          <p>{weatherData.currentWeather.dt}</p>
          <p>{weatherData.currentWeather.city}</p>
          <p>{weatherData.currentWeather.country}</p>
          <p>{weatherData.currentWeather.population}</p>
          <p>{weatherData.currentWeather.temp}°C</p>
          <p>{weatherData.currentWeather.feelsLike}°C</p>
          <p>{weatherData.currentWeather.description}</p>
          <p>{weatherData.currentWeather.windSpeed}m/s</p>
          <p>{weatherData.currentWeather.humidity}%</p>
        </div>
      )}
      {groupedForecast &&
        Object.keys(groupedForecast).map((date) => (
          <div key={date}>
            <div onClick={() => setOpenDate(openDate === date ? null : date)}>
              <p>{formatDate(date)}</p>
            </div>
            {openDate === date && (
              <div>
                {groupedForecast[date].map((item, index) => (
                  <div key={index}>
                    <p>{formatTime(item.dtTxt)}</p>
                    <p>{item.description}</p>
                    <p>
                      {item.tempMin}°C / {item.tempMax}°C
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
