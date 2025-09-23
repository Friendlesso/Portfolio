import { AdressBar } from "../../components/AdressBar"
import { FileMenuBar } from "../../components/FileMenuBar"
import { ToolBar } from "../../components/ToolBar"
import { WindowHeader } from "../../components/WindowHeader"
import type { menuItems } from "../../data/desktopItems"
import { games } from "../../data/gamesData"
import { useMaximizable } from "../../hooks/useMaximizable"

interface GamesFolderProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function GamesFolder({ item, onClose }: GamesFolderProps) {

  const { isMaximized, toggleMaximized, isSmallScreen } = useMaximizable();

  if (!item) return null

  return (
    <>
      <div className={`dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col transition-all duration-350
          ${isMaximized ? " w-[100vw] h-[100vh] pb-[3.5rem] " : "min-w-[550px] max-w-[950px] h-[70vh] w-fit"}
        `}>
        <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} isMaximized={isMaximized} onMaximize={toggleMaximized} disableMaximize={isSmallScreen} />
        <div className="bg-[var(--folder-box-color)] px-3">
          <FileMenuBar />
        </div>
        <div>

        </div>
        <div className="bg-[var(--folder-box-color)] dual-border-inner px-3 overflow-y-auto">
          <ToolBar />
        </div>
        <div className="bg-[var(--folder-box-color)] dual-border-folder -mt-0.5 px-3 py-1 overflow-y-auto">
          <AdressBar />
        </div>
        <section className="bg-[var(--folder-box-color)] flex-1 dual-border-inner mt-1 px-3 pt-3 overflow-y-auto">
          <div className=" flex">
            {games.map((game, index) => (
              <button key={index} className="flex flex-col justify-between items-center mr-4">
                <img src={game.icon} className="w-10" alt="" />
                <p>{game.name}</p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}