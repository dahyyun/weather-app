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
      {Object.keys(groupedForecast).map((date) => (
        <div key={date}>
          <div onClick={() => setOpenDate(openDate === date ? null : date)}>
            <p>{formatDate(date)}</p>
          </div>
          {openDate === date && (
            <div>
              {groupedForecast[date].map((item, index) => (
                <div key={index}>
                  <p>{formatTime(item.dtTxt)}</p>
                  <p>{item.description}</p>
                  <p>
                    {item.tempMin}°C / {item.tempMax}°C
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
