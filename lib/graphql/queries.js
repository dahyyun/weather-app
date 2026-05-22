import { gql } from '@apollo/client'

export const GET_CURRENT_WEATHER = gql`
  query GetCurrentWeather($city: String!) {
    currentWeather(city: $city) {
      city
      country
      population
      dt
      temp
      feelsLike
      humidity
      description
      icon
      windSpeed
    }
  }
`

export const GET_FORECAST = gql`
    query GetForecast($city: String!) {
        forecast(city: $city) {
            dtTxt
            description
            icon
            tempMin
            tempMax
        }
    }
`