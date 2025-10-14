import { useState, useEffect, useRef } from 'react'
import { TaskBar } from '../../components/TaskBar/TaskBar'
import { menuItems } from '../../data/desktopItems'
import { TextFile } from '../TextFile/TextFile'
import type { TextFileProps } from '../TextFile/TextFile'
import { ContextMenu } from '../../components/ContextMenu/ContextMenu'
import TextFilePng from '../../assets/images/icons/text_file.svg'

export function DesktopPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Load last opened item by label
  const [openLabel, setOpenLabel] = useState<string | null>(() => {
    return localStorage.getItem("openLabel");
  })

  const [desktopItems, setDesktopItems] = useState(menuItems)
  const [menuPos, setMenuPos] = useState<{ x: number, y: number } | null>(null)
  const [iconSize, setIconSize] = useState<"small" | "medium" | "large">(
    () => (sessionStorage.getItem("iconSize") as "small" | "medium" | "large" || "medium")
  );

  useEffect(() => {
    sessionStorage.setItem("iconSize", iconSize);
  }, [iconSize])

  const iconRef = useRef<(HTMLButtonElement | null)[]>([])

  const openIndex = openLabel
    ? desktopItems.findIndex(item => item.label === openLabel)
    : null

  // Save to localStorage when openLabel changes
  useEffect(() => {
    if (openLabel) {
      localStorage.setItem("openLabel", openLabel)
    } else {
      localStorage.removeItem("openLabel")
    }
  }, [openLabel])

  const handleNewTextFile = () => {
    const textFileCount = desktopItems.filter(item =>
      item.label.startsWith("TextFile")
    ).length

    const newId = (textFileCount + 1).toString();
    const newLabel = `TextFile-${newId}`
    const newFile = {
      label: newLabel,
      icon: TextFilePng, // valid icon path
      headerColor: '#41009D',
      component: (props: Omit<TextFileProps, 'fileId' | 'label'>) => <TextFile {...props} fileId={newId} label={newLabel} />
    }
    setDesktopItems(prev => [...prev, newFile])
  }

  const handleOpenItem = (label: string) => {
    setOpenLabel(label)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectedIndex === null) return
      const currentIcon = iconRef.current[selectedIndex]
      if (currentIcon && !currentIcon.contains(e.target as Node)) {
        setSelectedIndex(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [selectedIndex])

  return (
    <>
      <div
        className="flex flex-col h-screen w-screen bg-[var(--color-background)]"
        onContextMenu={(e) => {
          e.preventDefault()
          setMenuPos({ x: e.pageX, y: e.pageY })
        }}
      >
        <section
          className="flex flex-col flex-wrap max-h-screen content-start overflow-auto px-4 pt-6"
          style={{ height: 'calc(100vh - 3.5rem)' }}
        >
          {desktopItems.map((item, index) => (
            <button
              ref={(el) => { iconRef.current[index] = el }}
              key={index}
              className={`flex flex-col items-center mb-6 w-15 cursor-pointer ${selectedIndex === index ? "bg-blue-700" : ""}`}
              onClick={() => setSelectedIndex(index)}
              onDoubleClick={() => {
                handleOpenItem(item.label)
                setSelectedIndex(null)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleOpenItem(item.label)
                }
              }}
            >
              <img
                className={`${iconSize === "large" ? "w-20" : iconSize === "medium" ? "w-12" : "w-8"}`}
                loading="lazy"
                src={item.icon}
                alt={item.label}
              />
              <p
                className={`text-lg mt-1 w-full text-center ${selectedIndex === index ? "border border-dashed border-white text-white bg-blue-700" : "text-black"}`}
              >
                {item.label}
              </p>
            </button>
          ))}
        </section>

        {openIndex !== null && desktopItems[openIndex] && (() => {
          const PageComponent = desktopItems[openIndex].component
          return (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit">
              <PageComponent
                item={desktopItems[openIndex]}
                onClose={() => setOpenLabel(null)}
              />
            </div>
          )
        })()}

        {menuPos && (
          <ContextMenu
            x={menuPos.x}
            y={menuPos.y}
            onClose={() => setMenuPos(null)}
            onChangeIconSize={setIconSize}
            onNewTextFile={handleNewTextFile}
          />
        )}

        <footer className="fixed bottom-0 left-0 w-full">
          <TaskBar
            item={openIndex !== null && desktopItems[openIndex] ? desktopItems[openIndex] : null}
            onClose={() => setOpenLabel(null)}
            onOpenItem={handleOpenItem}
          />
        </footer>
      </div>
    </>
  )
}
