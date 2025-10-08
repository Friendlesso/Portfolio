import closeIcon from '../assets/images/icons/close.svg'
import backIcon from '../assets/images/icons/ArrowLeft.svg'
import maximizeIcon from '../assets/images/icons/resize.svg'

interface WindowHeaderProps {
  label: string
  icon: string
  bgColor: string
  onClose: () => void
  isMaximized?: boolean
  onMaximize?: () => void
  disableMaximize?: boolean
  className?: string
}

export function WindowHeader({ label, icon, bgColor, onClose, onMaximize, disableMaximize }: WindowHeaderProps) {
  return (
    <header className={`flex justify-between items-center w-full px-2 ${bgColor}`}>
      <div className="flex items-center py-2">
        <img src={icon} alt={label} className="w-8 h-8" />
        <p className="text-xl pl-2 text-white">{label}</p>
      </div>
      <div className="flex">
        <button onClick={onClose} className="dual-border sm:pointer-none flex justify-center items-center  bg-[var(--folder-box-color)] w-6 h-6">
          <img src={backIcon} loading='lazy' alt="Minimize Button" className=" w-4 h-4" />
        </button>
        <button className={`dual-border p-0.5 bg-[var(--folder-box-color)] w-6 h-6 ${disableMaximize ? 'opacity-50 cursor-not-allowed ' : ''}`}
          onClick={onMaximize}>
          <img src={maximizeIcon} loading='lazy' alt="Maximize Button" className="w-fit" />
        </button>
        <button onClick={onClose} className="dual-border p-0.5 bg-[var(--folder-box-color)] w-6 h-6">
          <img src={closeIcon} loading='lazy' alt="Close button" className="w-fit" />
        </button>
      </div>
    </header>
  )
}