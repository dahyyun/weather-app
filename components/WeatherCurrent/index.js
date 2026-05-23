import styles from "./WeatherCurrent.module.css";

export default function WeatherCurrent({ data }) {
  return (
    <article className={styles.container}>
      <header className={styles.left}>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.description}
        />
        <div className={styles.details}>
          <time
            dateTime={new Date(data.dt * 1000).toISOString()}
            className={styles.time}
          >
            {new Date(data.dt * 1000).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
          <h2 className={styles.cityName}>
            {data.city}, {data.country}
          </h2>
          <p className={styles.population}>(인구수 : {data.population})</p>
        </div>
        <div className={styles.right}>
          <strong className={styles.temperature}>{data.temp}°C</strong>
          <p className={styles.details}>
            Feels like {data.feelsLike}°C {data.description} 풍속{" "}
            {data.windSpeed}m/s 습도 {data.humidity}%
          </p>
        </div>
      </header>
    </article>
  );
}
