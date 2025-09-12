import { menuItems } from "../../data/desktopItems"
import { WindowHeader } from "../../components/WindowHeader"
import { FileMenuBar } from "../../components/FileMenuBar"
import { AdressBar } from "../../components/AdressBar"
import { ToolBar } from "../../components/ToolBar"
import { ProjectItems, type ProjectItem } from "../../data/projectsData";
import { useState } from "react"
import { ProjectPage } from "./ProjectPage"

interface FolderPageProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function FolderPage({ item, onClose }: FolderPageProps) {
  const [openProject, setOpenProject] = useState<ProjectItem | null>(null);

  if (!item) return null


  return (

    <>
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
        <section className="bg-[var(--folder-box-color)] flex-1 dual-border-inner mt-1 px-3 pt-3 overflow-y-auto">
          <div className="flex">
            {ProjectItems.project.map((proj, index) => (
              <button
                key={index}
                onClick={() => setOpenProject(proj)}
                className="flex flex-col justify-between items-center mr-4"
              >
                <img className="w-10 h-10" src={proj.icon} alt="" />
                <p>{proj.name}</p>
              </button>
            ))}
          </div>
        </section>
      </div>

      {openProject && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ProjectPage project={openProject} onClose={() => setOpenProject(null)} />
        </div>
      )}
    </>

  )
}