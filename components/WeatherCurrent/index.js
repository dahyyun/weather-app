import styles from "./WeatherCurrent.module.css";

export default function WeatherCurrent({ data }) {
  return (
    <article className={styles.container}>
      <header className={styles.left}>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.description}
        />
        <div className={styles.cityInfo}>
          <time
            dateTime={new Date(data.dt * 1000).toISOString()}
            className={styles.time}
          >
            {(() => {
              const d = new Date(data.dt * 1000);
              const date = d.toLocaleString("en-US", {
                month: "short",
                day: "numeric",
              });
              const time = d
                .toLocaleString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
                .replace("AM", "am")
                .replace("PM", "pm");
              return `${date}. ${time}`;
            })()}
          </time>
          <h2 className={styles.cityName}>
            {data.city}, {data.country}{" "}
            <span className={styles.population}>
              (인구수 : {data.population})
            </span>
          </h2>
        </div>
      </header>
      <div className={styles.right}>
        <strong className={styles.temperature}>{data.temp}°C</strong>
        <p className={styles.details}>
          Feels like {data.feelsLike}°C {data.description} 풍속 {data.windSpeed}
          m/s 습도 {data.humidity}%
        </p>
      </div>
    </article>
  );
}
