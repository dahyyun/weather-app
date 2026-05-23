import { useState } from "react";

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
    <section>
      <h2>5-day Forecast</h2>
      <ul>
        {Object.keys(groupedForecast).map((date) => (
          <li key={date}>
            <button
              onClick={() => setOpenDate(openDate === date ? null : date)}
            >
              <span>{formatDate(date)}</span>
            </button>
            {openDate === date && (
              <ul>
                {groupedForecast[date].map((item, index) => (
                  <li key={index}>
                    <img
                      src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                      alt={item.description}
                    />
                    <time dateTime={item.dtTxt}>{formatTime(item.dtTxt)}</time>
                    <p>{item.description}</p>
                    <p>
                      {item.tempMin}°C / {item.tempMax}°C
                    </p>
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
