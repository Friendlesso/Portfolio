import { Projects } from "./Projects"
import { WindowHeader } from "../../components/WindowHeader"
import { AboutMe } from "./AboutMe"
import { TechStack } from "./TechStack"
import { Profile } from "./Profile"
import type { menuItems } from "../../data/desktopItems"
import { useMaximizable } from "../../hooks/useMaximizable.ts"

interface BiographyWindowProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function BiographyWindow({ item, onClose }: BiographyWindowProps) {

  const { isMaximized, toggleMaximized, isSmallScreen } = useMaximizable();

  if (!item) return
  return (
    <div className={`dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col transition-all duration-350
      ${isMaximized ? 'w-[100vw] h-[100dvh] pb-[3.5rem]' : 'h-[80vh] w-fit min-w-[650px] max-w-[950px]'}
    `}>
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} isMaximized={isMaximized} onMaximize={toggleMaximized} disableMaximize={isSmallScreen} />
      <div className="flex flex-1 flex-col items-center bg-[var(--folder-box-color)] dual-border-inner mt-1 px-6 sm:px-8 lg:px-12 overflow-y-auto">
        <div className="w-full flex flex-col items-center max-w-[1000px]">
          <Profile />
          <TechStack />
          <AboutMe />
          <Projects />
        </div>
      </div>
    </div>
  )
}