import { Projects} from "./Projects"
import { WindowHeader } from "../../components/WindowHeader"
import { AboutMe } from "./AboutMe"
import { TechStack } from "./TechStack"
import { Profile } from "./Profile"
import type { menuItems } from "../../data/desktopItems"

interface BiographyWindowProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function BiographyWindow({ item, onClose }: BiographyWindowProps) {
  if (!item) return
  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col h-[80vh] w-fit min-w-[350px] max-w-[950px] ">
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} />
      <div className="bg-[var(--folder-box-color)] dual-border-inner mt-1 px-6 sm:px-8 lg:px-12 overflow-y-auto">
        <Profile />
        <TechStack />
        <AboutMe />
        <Projects />
      </div>
    </div>
  )
}