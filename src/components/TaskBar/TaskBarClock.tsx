import { useRef, useState } from "react"
import { Clock } from "./Clock"
import { TackBarCalender } from "./TaskBarCalender";

export function TaskBarClock() {

  const [isCalenderOpen,setIsCalenderOpen] = useState<boolean>(false);
  const calenderButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative">
      <button 
        ref={calenderButtonRef}
        onClick={() => setIsCalenderOpen((prev) => !prev)}
        className="text-lg dual-border px-3 py-1.5">
        <Clock />
      </button>
      {isCalenderOpen && (
        <div className=" absolute right-0 bottom-14 mb-2">
          <TackBarCalender />
        </div>
      )}
    </div>
  )

}