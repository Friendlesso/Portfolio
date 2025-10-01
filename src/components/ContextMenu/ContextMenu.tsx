import { useEffect, useState } from "react";

interface ContextMenuProps {
  x: number,
  y: number,
  onClose: () => void,
  onChangeIconSize: (size: "small" | "medium" | "large") => void,
  onNewTextFile: () => void
}

export function ContextMenu({ x, y, onClose, onChangeIconSize, onNewTextFile }: ContextMenuProps) {

  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const handleClick = () => onClose();
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [onClose])

  return (
    <ul className="absolute bg-white text-lg border rounded shadow-lg z-50" style={{ top: y, left: x }}>
      <li className="flex relative items-center justify-between px-2 text-start hover:bg-gray-200 m-1 rounded-sm transition-colors duration-150"
        onMouseEnter={() => setHovered("view")}
        onMouseLeave={() => setHovered(null)}
      >
        <p>View</p>
        <p className="mb-[-4px]">▸</p>
        {hovered === "view" && (
          <ul className="absolute top-0 left-full bg-white border rounded shadow-lg w-fit">
            <li className="hover:bg-gray-200 m-1 px-2 rounded-sm text-start text-nowrap "
              onClick={() => onChangeIconSize("large")}
            >Large icons</li>
            <li className="hover:bg-gray-200 m-1 px-2 rounded-sm text-start text-nowrap "
              onClick={() => onChangeIconSize("medium")}
            >Medium icons</li>
            <li className="hover:bg-gray-200 m-1 px-2 rounded-sm text-start text-nowrap "
              onClick={() => onChangeIconSize("small")}
            >Small icons</li>
          </ul>
        )}
      </li>
      <li className="flex relative items-center justify-between px-2 text-start hover:bg-gray-200 m-1 rounded-sm transition-colors duration-150"
        onMouseEnter={() => setHovered('new')}
        onMouseLeave={() => setHovered(null)}
      >
        <p>New</p>
        <p className="mb-[-4px]">▸</p>
        {hovered === "new" && (
          <ul className="absolute top-0 left-full bg-white border rounded shadow-lg w-fit">
            <li className="hover:bg-gray-200 m-1 px-2 rounded-sm text-start text-nowrap"
              onClick={onNewTextFile}
            >
              Text file
            </li>
          </ul>
        )}
      </li>
      <li className="px-2 text-start hover:bg-gray-200 m-1 rounded-sm transition-colors duration-150" onClick={() => window.location.reload()}>Refresh</li>
    </ul>
  )
}