import { menuItems } from "../../data/desktopItems"
import { WindowHeader } from "../../components/WindowHeader"
import resumePdf from "../../assets/files/Mihailo-Djurovic .pdf"
import resumePicture from "../../assets/images/MihailoCv.png"

interface ResumePageProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function ResumeWindow({ item, onClose }: ResumePageProps) {
  if (!item) return null

  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)] h-fit w-fit min-w-[350px] max-w-[950px]">
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} />
      <div className="bg-[var(--folder-box-color)] p-1">
        <a href={resumePdf} download="Mihailo-Djurovic.pdf" className="dual-border mr-2 p-1 text-lg">Download</a>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="dual-border p-1 text-lg">Open in a new tab</a>
      </div>
      <div className="bg-black flex justify-center">
        <img src={resumePicture} className="max-h-[600px]  " alt="Resume Picture" />
      </div>
    </div>
  )
}