import { menuItems } from "../data/menuItems"
import { WindowHeader } from "../components/WindowHeader"

interface FolderPageProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function FolderPage({ item, onClose }: FolderPageProps) {
  if (!item) return null
  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)] ">
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} />
      <div>FOLDER</div>
    </div>
  )
}