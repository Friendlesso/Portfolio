import dayjs from "dayjs"
import { useState, useEffect, useRef } from "react"
import { TaskBarMenu } from "./TaskBarMenu";

export function TaskBar() {

  const [isShowing, setIsShowing] = useState<boolean>(false)
  const startButtonRef = useRef<HTMLButtonElement>(null)

  function handleStartClick() {
    setIsShowing(prev => !prev)
  }

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
    <TaskBarMenu isShowing={isShowing} onClose={() => setIsShowing(false)}  ignoreRef={startButtonRef} />
      <footer className="mt-auto w-full h-14 bg-[var(--taskbar-color)] flex  items-center justify-between px-3 border-t-2 border-white">
        <button ref={startButtonRef} onClick={handleStartClick} className="text-xl dual-border px-7 py-1.5">Start</button>
        <div className="text-xl dual-border px-3.5 py-1.5 pointer-events-none">
          {Clock()}
        </div>
      </footer>
    </>
  )
}