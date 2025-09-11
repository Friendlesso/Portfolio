import { menuItems } from "../../data/desktopItems"
import { WindowHeader } from "../../components/WindowHeader"
import { FileMenuBar } from "../../components/FileMenuBar"
import { AdressBar } from "../../components/AdressBar"
import { ToolBar } from "../../components/ToolBar"

interface FolderPageProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function FolderPage({ item, onClose }: FolderPageProps) {
  if (!item) return null
  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col h-[70vh] w-fit min-w-[550px] max-w-[950px] ">
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} />
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
    </div>
  )
}