import { WindowHeader } from "../../components/WindowHeader"
import { GitHubRepos } from "./GitHubRepos"
import { GithubProfile } from "./GitHubProfile"
import type { menuItems } from "../../data/desktopItems"

interface GitHubProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function GitHubWindow({ item, onClose }: GitHubProps) {
  if (!item) return
  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col h-[80vh]  min-w-[450px] max-w-[1050px] ">
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} />
      <div className="bg-[var(--github-background)] min-[1700px]:flex flex-1 px-4 sm:px-6 lg:px-12 overflow-y-auto text-white">
        <GithubProfile />
        <GitHubRepos />
      </div>
    </div>
  )
}