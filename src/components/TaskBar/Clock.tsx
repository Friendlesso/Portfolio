import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function Clock() {
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