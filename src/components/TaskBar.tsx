import dayjs from "dayjs"
import { useState, useEffect } from "react"
import { TaskBarMenu } from "./TaskBarMenu";

export function TaskBar() {
  function Clock() {
    const [time, setTime] = useState<string>(dayjs().format('HH:mm dddd,DD,MMMM'));

    useEffect(() => {
      const update = () => setTime(dayjs().format('HH:mm dddd,DD,MMMM'))
      update()

      const now = dayjs();
      const msUntilNextMinute = 60000 - (now.second() * 1000 + now.millisecond());

      let interval: number;
      const timeout = setTimeout(() => {
        update();

        interval = setInterval(update, 60000);
      }, msUntilNextMinute);

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      }
    }, [])

    return <p>{time}</p>
  }

  return (
    <>
    <TaskBarMenu />
      <footer className="mt-auto w-full h-14 bg-[var(--taskbar-color)] flex  items-center justify-between px-14">
        <button className="text-xl dual-border px-7 py-1.5">Start</button>
        <div className="text-xl dual-border px-3.5 py-1.5">
          {Clock()}
        </div>
      </footer>
    </>
  )
}