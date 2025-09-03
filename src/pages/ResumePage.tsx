import { menuItems } from "../data/menuItems"
import { WindowHeader } from "../components/WindowHeader"

interface ResumePageProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function ResumePage({ item, onClose }: ResumePageProps) {
  if (!item) return null
  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)]">
      <WindowHeader label={item.lable} icon={item.icon} bgColor={item.headerColor} onClose={onClose} />
    </div>
  )
}