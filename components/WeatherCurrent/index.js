export default function WeatherCurrent({ data }) {
  return (
    <section>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={data.description}
      />
      <p>{data.dt}</p>
      <p>{data.city}</p>
      <p>{data.country}</p>
      <p>{data.population}</p>
      <p>{data.temp}°C</p>
      <p>{data.feelsLike}°C</p>
      <p>{data.description}</p>
      <p>{data.windSpeed}m/s</p>
      <p>{data.humidity}%</p>
    </section>
  );
}
