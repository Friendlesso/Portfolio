import { useState, useRef } from "react"
import { TaskBarMenu } from "./TaskBarMenu";
import { menuItems } from "../../data/desktopItems";
import { TaskBarClock } from "./TaskBarClock";

interface TaskBarProps {
  item: typeof menuItems[0] | null;
  onClose: () => void
  onOpenItem: (label: string) => void
}

export function TaskBar({ item, onOpenItem }: TaskBarProps) {

  const [isShowing, setIsShowing] = useState<boolean>(false)
  const startButtonRef = useRef<HTMLButtonElement>(null)

  function handleStartClick() {
    setIsShowing(prev => !prev)
  }

  return (
    <>

      <div className=" w-full relative h-14 bg-[var(--taskbar-color)] flex  items-center justify-between px-3 border-t-2 border-white">
        <button ref={startButtonRef} onClick={handleStartClick} className="text-xl dual-border px-7 py-1.5">Start</button>
        <TaskBarMenu
          isShowing={isShowing}
          onClose={() => setIsShowing(false)}
          ignoreRef={startButtonRef}
          onOpenItem={onOpenItem}
          item={item}
        />
        <TaskBarClock/>
      </div>
    </>
  )
}