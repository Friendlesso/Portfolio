import { GitHubRepos } from "../components/GitHubRepos"
import { WindowHeader } from "../components/WindowHeader"
import type { menuItems } from "../data/menuItems"

interface BioWindowProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function BioWindow({ item, onClose }: BioWindowProps) {
  if (!item) return
  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)] w-4xl">
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} />
      <div className="bg-[var(--folder-box-color)]">
        <GitHubRepos />
      </div>
    </div>
  )
}