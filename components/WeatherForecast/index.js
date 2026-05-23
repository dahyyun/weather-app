import { useState } from "react";
import styles from "./WeatherForecast.module.css";

export default function WeatherForecast({ data }) {
  const [openDate, setOpenDate] = useState(null);

  const groupedForecast = data.reduce((acc, item) => {
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
    <section className={styles.container}>
      <h2 className={styles.title}>5-day Forecast</h2>
      <ul className={styles.list}>
        {Object.keys(groupedForecast).map((date) => (
          <li key={date} className={styles.dateItem}>
            <button
              onClick={() => setOpenDate(openDate === date ? null : date)}
            >
              <span>{formatDate(date)}</span>
              <span>{openDate === date ? "∧" : "∨"}</span>
            </button>
            {openDate === date && (
              <ul className={styles.timeList}>
                {groupedForecast[date].map((item, index) => (
                  <li key={index} className={styles.timeItem}>
                    <div className={styles.timeInfo}>
                      <img
                        src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                        alt={item.description}
                      />
                      <time dateTime={item.dtTxt}>
                        {formatTime(item.dtTxt)}
                      </time>
                    </div>
                    <div className={styles.tempInfo}>
                      <p>{item.description}</p>
                      <p>
                        {item.tempMin}°C / {item.tempMax}°C
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
