import { useEffect, useRef, useState, type RefObject } from "react";
import dayjs from "dayjs";

interface CalenderProps {
  isCalenderOpen: boolean
  onClose: () => void
  ignoreRef: RefObject<HTMLButtonElement | null>
}
export function TackBarCalender({ isCalenderOpen, onClose, ignoreRef }: CalenderProps) {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const calRef = useRef<HTMLDivElement>(null)

  const startOfMonth = currentDate.startOf("month");
  const daysInMonth = currentDate.daysInMonth();
  const startDay = startOfMonth.day();

  useEffect(() => {
    if (!isCalenderOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (calRef.current && !calRef.current.contains(e.target as Node) && !(ignoreRef?.current && ignoreRef.current?.contains(e.target as Node))) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isCalenderOpen,ignoreRef ,onClose])

  if (!isCalenderOpen) return null;

  const days: (number | null)[] = Array(startDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  while (days.length % 7 !== 0) {
    days.push(null);
  }


  return (
    <div ref={calRef} className="bg-[var(--folder-box-color)] text-lg w-fit min-w-[300px] border-white border-t-3 border-l-3 rounded-tl-xl absolute bottom-[-13px] right-[-13px] p-2">
      <div className="px-3 border-b-white border-b-2 w-full mb-2">
        <p>{currentDate.format("dddd,MMMM DD")}</p>
      </div>
      <div className="flex justify-between mx-3">
        <span>{currentDate.format("MMMM YYYY")}</span>
        <div className="flex">
          <button className="hover:text-white" onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}>◀</button>
          <button className="hover:text-white" onClick={() => setCurrentDate(currentDate.add(1, "month"))}>▶</button>
        </div>
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
          <div key={i} className={` hover:bg-white hover:rounded-full text-black ${day && currentDate.date() === day ? "bg-white rounded-full" : ""}`}>
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  )
}