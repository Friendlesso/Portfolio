import { useState } from "react"
import { ProjectItems } from "../data/projectsData";
import { fileSize } from "../utils/fileSize";

export function FileMenuBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isFolderSizeOpen, setIsFolderSizeOpen] = useState(false);
  const [isFolderVersionOpen, setIsFolderVersionOpen] = useState(false);

  const openFolderSize = () => setIsFolderSizeOpen(true);
  const closeFolderSize = () => setIsFolderSizeOpen(false);

  const openFolderVersion = () => setIsFolderVersionOpen(true);
  const closeFolderVersion = () => setIsFolderVersionOpen(false);


  const toggleMenu = (menu: string) => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };

  return (
    <div className="flex text-lg">
      <button className="file-menu-bar px-2 "><u>F</u>ile</button>
      {/* View Button logic */}
      <div className="relative">
        <button
          className="file-menu-bar px-2"
          onClick={() => toggleMenu("view")}
        >
          <u>V</u>iew
        </button>

        {openMenu === "view" && (
          <div className="absolute top-full left-0 bg-[var(--folder-box-color)] text-black border shadow-md">
            <button
              className="block w-full px-2 py-0.5 file-menu-bar"
              onClick={() => window.location.reload()}>
              Refresh
            </button>
          </div>
        )}
      </div>
      {/* Properties Button logic */}
      <div className="relative">
        <button className="file-menu-bar px-2" onClick={() => toggleMenu("Properties")}>
          <u>P</u>roperties
        </button>

        {openMenu === "Properties" && (
          <div className="absolute top-full left-0 bg-[var(--folder-box-color)] text-black border shadow-md">
            <button
              onClick={() => {
                openFolderSize()
                setOpenMenu(null)
              }}
              className="block px-1.5 py-0.5 file-menu-bar">
              Folder size
            </button>
          </div>
        )}
      </div>
      {isFolderSizeOpen && (
        <div className="absolute top-1/2 left-1/2 w-48 h-19 bg-[var(--folder-background)] border shadow-lg z-50 p-1">
          <div className="flex justify-between items-center text-white bg-[var(--folder-header)] px-1.5 mb-1">
            <h3>Folder Size</h3>
            <button className=" cursor-pointer hover:bg-white text-white hover:text-background hover:border-2 rounded-full px-2 text-sm   " onClick={closeFolderSize}>X</button>
          </div>
          <div className="bg-[var(--folder-box-color)] dual-border mb-0 pb-0 px-1">
            <p>Total size: {fileSize(ProjectItems)}   Mb</p>
          </div>
        </div>
      )}

      {/* Help Button logic */}
      <div className="relative">
        <button
          onClick={() => toggleMenu("Help")}
          className="file-menu-bar px-2">
          <u>H</u>elp
        </button>

        {openMenu === "Help" && (
          <div className="absolute top-full left-0 bg-[var(--folder-box-color)] text-black border shadow-md">
            <button
              className=" block px-2 py-0.5 file-menu-bar"
              onClick={() => {
                openFolderVersion()
                setOpenMenu(null)
              }}
            >Version
            </button>
          </div>
        )}
      </div>
      {isFolderVersionOpen && (
        <div className="absolute top-1/2 left-1/2 w-48 h-19 bg-[var(--folder-background)] border shadow-lg z-50 p-1">
          <div className="flex justify-between items-center text-white bg-[var(--folder-header)] px-1.5 mb-1">
            <h3>Folder Version</h3>
            <button className=" cursor-pointer hover:bg-white text-white hover:text-background hover:border-2 rounded-full px-2 text-sm   " onClick={closeFolderVersion}>X</button>
          </div>
          <div className="bg-[var(--folder-box-color)] dual-border mb-0 pb-0 px-1">
            <p>Version: 1.21.9</p>
          </div>

        </div>
      )}

    </div>
  )
}