import { menuItems } from "../../data/desktopItems"
import { WindowHeader } from "../../components/WindowHeader"
import resumePdf from "../../assets/files/MihailoDjurovic-Resume.pdf"
import resumePageOne from "../../assets/images/ResumePageOne.png"
import resumePageTwo from "../../assets/images/ResumePageTwo.png"
import { useMaximizable } from "../../hooks/useMaximizable"

interface ResumePageProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function ResumeWindow({ item, onClose }: ResumePageProps) {

  const { isMaximized, toggleMaximized, isSmallScreen } = useMaximizable();

  if (!item) return null

  return (
    <div className={`dual-border-folder p-1 bg-[var(--folder-background)] transition-all duration-350
      ${isMaximized ? "h-[100dvh] w-[100vw]" : "h-fit w-fit min-w-[500px] max-w-[950px]"}
    `}>
      <WindowHeader
        label={item.label}
        icon={item.icon}
        bgColor={item.headerColor}
        onClose={onClose}
        isMaximized={isMaximized}
        onMaximize={toggleMaximized}
        disableMaximize={isSmallScreen}
      />
      <div className="flex-1 flex flex-col">
        <div className="bg-[var(--folder-box-color)] p-1">
          <a href={resumePdf} download="Mihailo-Djurovic.pdf" className="dual-border mr-2 p-1 text-lg">Download</a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="dual-border p-1 text-lg">Open in a new tab</a>
        </div>
        <div className="bg-black flex flex-1 flex-col justify-center items-center h-[100vh]">
          <div className={`flex flex-col max-h-[75vh] overflow-y-scroll ${isMaximized ? "max-h-[95vh]" : ""}`}>
            <img src={resumePageOne} loading="lazy" className="lg:max-h-[75vh] max-h-[85vh] max-w-full h-auto w-auto object-contain mb-2" alt="Resume Picture" />
            <img src={resumePageTwo} loading="lazy" className="lg:max-h-[75vh] max-h-[85vh] max-w-full h-auto w-auto object-contain" alt="Resume Picture" />
          </div>
        </div>
      </div>

    </div>
  )
}