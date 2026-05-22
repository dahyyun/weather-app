import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client/react'
import { GET_CURRENT_WEATHER, GET_FORECAST } from '../lib/graphql/queries'

export default function CityPage() {
  const router = useRouter()
  const { city } = router.query
  const { data: weatherData, loading: weatherLoading } = useQuery(GET_CURRENT_WEATHER, {
    variables: { city: city },
    skip: !city
  })
  const { data: forecastData, loading: forecastLoading } = useQuery(GET_FORECAST, {
    variables: { city: city },
    skip: !city
  })

  if (weatherLoading || forecastLoading) return <div>Loading . . .</div>

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
        {forecastData && (
            <div>
                {forecastData.forecast.map((item, index) => (
                    <div>
                        <p>{item.dtTxt}</p>
                        <p>{item.description}</p>
                        <p>{item.tempMin}°C / {item.tempMax}°C</p>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}