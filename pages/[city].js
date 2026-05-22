import { useRouter } from "next/router";
import { useQuery } from "@apollo/client/react";
import { GET_CURRENT_WEATHER, GET_FORECAST } from "../lib/graphql/queries";
import WeatherCurrent from "../components/WeatherCurrent";
import dynamic from "next/dynamic";

const WeatherForecast = dynamic(() => import("../components/WeatherForecast"), {
  loading: () => <div>Loading forecast...</div>,
});

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

  if (weatherLoading || forecastLoading) return <div>Loading . . .</div>;

  return (
    <div>
      <h1>{city}</h1>
      {weatherData && <WeatherCurrent data={weatherData.currentWeather} />}
      {forecastData && <WeatherForecast data={forecastData.forecast} />}
    </div>
  );
}
