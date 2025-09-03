import { useState, useEffect, useRef } from 'react'
import { TaskBar } from '../../components/TaskBar'
import { ResumePage } from '../ResumePage'
import { menuItems } from '../../data/menuItems'

export function DesktopPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const iconRef = useRef<(HTMLDivElement | null)[]>([]);

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
      <div className="flex flex-col h-screen w-screen bg-[var(--color-background)]">
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
              <img className='w-12 ' src={item.icon} alt={item.lable} />
              <p className={`text-lg mt-1 w-full text-center ${selectedIndex === index ? "border border-dashed border-white text-white bg-blue-700" : "text-black"}`}
              >{item.lable}</p>
            </div>
          ))}
        </section>
        <ResumePage
          item={openIndex !== null ? menuItems[openIndex] : null}
          onClose={() => setOpenIndex(null)}
        />
        <TaskBar />
      </div>
    </>
  )
}