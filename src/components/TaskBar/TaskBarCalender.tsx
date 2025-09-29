import { useState } from "react";
import dayjs from "dayjs";

export function TackBarCalender() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const daysInMonth = currentDate.daysInMonth();
  const startDay = startOfMonth.day();

  const days: (number | null)[] = Array(startDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  while (days.length % 7 !== 0) {
    days.push(null);
  }


  return (
    <div className="bg-[var(--folder-box-color)]">
      <div>
        <p>{currentDate.format("dddd,MMMM DD")}</p>
      </div>
      <div>
        <span>{currentDate.format("MMMM YYYY")}</span>
        <button onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}>◀</button>
        <button onClick={() => setCurrentDate(currentDate.add(1, "month"))}>▶</button>
      </div>
      {/* Weekday headers */}
      <div className="grid grid-cols-7 text-center mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa",].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>
      {/* Days */}
      <div className="grid grid-cols-7 text-center">
        {days.map((day, i) => (
          <div key={i} className={` ${day && currentDate.date() === day ? "bg-white rounded-full" : ""}`}>
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  )
}