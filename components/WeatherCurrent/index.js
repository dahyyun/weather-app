export default function WeatherCurrent({ data }) {
  return (
    <article>
      <header>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.description}
        />
        <div>
          <time dateTime={new Date(data.dt * 1000).toISOString()}>
            {new Date(data.dt * 1000).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
          <h2>
            {data.city}, {data.country}
          </h2>
          <p>(인구수 : {data.population})</p>
        </div>
        <div>
          <strong>{data.temp}°C</strong>
          <p>
            Feels like {data.feelsLike}°C {data.description} 풍속{" "}
            {data.windSpeed}m/s 습도 {data.humidity}%
          </p>
        </div>
      </header>
    </article>
  );
}
