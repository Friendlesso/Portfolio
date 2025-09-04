import { GitHubRepos } from "../../components/GitHubRepos"
import { WindowHeader } from "../../components/WindowHeader"
import { AboutMe } from "./AboutMe"
import { TechStack } from "./TechStack"
import { Profile } from "./Profile"
import type { menuItems } from "../../data/menuItems"

interface BioWindowProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function BioWindow({ item, onClose }: BioWindowProps) {
  if (!item) return
  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col h-[80vh] w-sm sm:w-2xl lg:w-4xl ">
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} />
      <div className="bg-[var(--folder-box-color)] px-4 sm:px-6 lg:px-12 overflow-y-auto">
        <Profile />
        <TechStack />
        <AboutMe />
        <GitHubRepos />
      </div>
    </div>
  )
}