import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type CurrentWeather {
    city: String!
    country: String!
    population: Int!
    dt: Int!
    temp: Float!
    feelsLike: Float!
    humidity: Int!
    description: String!
    icon: String!
    windSpeed: Float!
  }

  type ForecastItem {
    dtTxt: String!
    tempMin: Float!
    tempMax: Float!
    description: String!
    icon: String!
  }

  type Query {
    currentWeather(city: String!): CurrentWeather
    forecast(city: String!): [ForecastItem!]!
  }
`;