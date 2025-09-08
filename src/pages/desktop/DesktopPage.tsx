import { useState, useEffect, useRef } from 'react'
import { TaskBar } from '../../components/TaskBar'
import { menuItems } from '../../data/desktopItems'

export function DesktopPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const iconRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleOpenItem = (label: string) => {
    const index = menuItems.findIndex(item => item.label === label);
    if (index !== -1) {
      setOpenIndex(index)
    }
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
      <div className="flex flex-col h-screen w-screen bg-[var(--color-background)] relative">
        <section className='flex flex-col px-4 py-6 px5'>
          {menuItems.map((item, index) => (
            <div
              ref={(el) => { iconRef.current[index] = el }}
              key={index}
              className={`flex flex-col items-center mb-6 w-15 cursor-pointer ${selectedIndex === index ? "bg-blue-700" : ""}`}
              onClick={() => setSelectedIndex(index)}
              onDoubleClick={() => {
                setOpenIndex(index)
                setSelectedIndex(null)
              }}>
              <img className='w-12 ' src={item.icon} alt={item.label} />
              <p className={`text-lg mt-1 w-full text-center ${selectedIndex === index ? "border border-dashed border-white text-white bg-blue-700" : "text-black"}`}
              >{item.label}</p>
            </div>
          ))}
        </section>

        {openIndex !== null && (() => {
          const PageComponent = menuItems[openIndex].component
          return (
            <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-fit h-fit'>
              <PageComponent
                item={menuItems[openIndex]}
                onClose={() => setOpenIndex(null)}
              />
            </div>

          )
        })()}
        <TaskBar
          item={openIndex !== null ? menuItems[openIndex] : null}
          onClose={() => setOpenIndex(null)}
          onOpenItem={handleOpenItem}
        />

      </div>
    </>
  )
}