import closeIcon from '../assets/images/icons/close.svg'
import minimizeIcon from '../assets/images/icons/minimize-fill.svg'
import maximizeIcon from '../assets/images/icons/resize.svg'

interface WindowHeaderProps {
  label: string
  icon: string
  bgColor: string
  onClose: () => void
}

export function WindowHeader({ label, icon, bgColor, onClose }: WindowHeaderProps) {
  return (
    <header className={`flex justify-between items-center w-full px-2 ${bgColor}`}>
      <div className="flex items-center">
        <img src={icon} alt={label} className="w-8 h-8" />
        <p className="text-xl pl-2 text-white">{label}</p>
      </div>
      <div className="flex">
        <button className="dual-border  bg-[var(--folder-box-color)] w-6 h-6">
          <img src={minimizeIcon} alt="" className="w-fit" />
        </button>
        <button className="dual-border p-0.5 bg-[var(--folder-box-color)] w-6 h-6">
          <img src={maximizeIcon} alt="" className="w-fit" />
        </button>
        <button onClick={onClose} className="dual-border p-0.5 bg-[var(--folder-box-color)] w-6 h-6">
          <img src={closeIcon} alt="" className="w-fit" />
        </button>
      </div>
    </header>
  )
}