import { TaskBar } from '../../components/TaskBar'

export function DesktopPage() {
  return(
    <>
      <div className="flex flex-col h-screen w-screen bg-[var(--color-background)]">
        <button>Something</button>
        <TaskBar />
      </div>
    </>
  )
}