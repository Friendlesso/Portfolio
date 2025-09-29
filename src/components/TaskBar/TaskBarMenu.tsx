import { useEffect, useRef, type RefObject } from 'react'
import windowsLable from '../../assets/images/windows.png'
import linkedInImage from '../../assets/images/icons/briefcase.png'
import instagramImage from '../../assets/images/icons/camera.png'
import gitHubImage from '../../assets/images/icons/github.png'
import resumeImage from '../../assets/images/icons/contact_book.png'
import type { menuItems } from '../../data/desktopItems'

type TaskBarMenuProps = {
  isShowing: boolean
  onClose: () => void
  ignoreRef?: RefObject<HTMLButtonElement | null>;
  item: typeof menuItems[0] | null;
  onOpenItem: (label: string) => void;
}

export function TaskBarMenu({ isShowing, onClose, ignoreRef, onOpenItem }: TaskBarMenuProps) {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isShowing) return

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node) && !(ignoreRef?.current && ignoreRef.current.contains(e.target as Node))) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isShowing, onClose, ignoreRef])

  if (!isShowing) return null;

  return (
    <>
      {isShowing && (
        <nav ref={navRef} className="flex absolute bottom-14 left-0 bg-[var(--folder-box-color)] w-fit p-2" aria-label='Taskbar Menu'>
          <div>
            <img src={windowsLable} alt="Windows94 lable" />
          </div>
          <div className='flex flex-col justify-between'>
            <a href='https://www.linkedin.com/in/mihailo-djurovic-2598a8336' target='_blank' rel="noopener noreferrer" className="flex items-center pl-2 pr-4 py-2 hover:bg-[var(--folder-background)]">
              <img className="w-8" src={linkedInImage} alt="" />
              <p className='text-xl pl-4'>LinkedIn</p>
            </a>
            <a href='https://www.instagram.com/friendlesso/' target='_blank' rel="noopener noreferrer" className="flex items-center pl-2 pr-4 py-2 hover:bg-[var(--folder-background)]">
              <img className="w-8" src={instagramImage} alt="" />
              <p className='text-xl pl-4'>Instagram</p>
            </a>
            <a href='https://github.com/Friendlesso' target='_blank' rel='noopener noreferrer' className="flex items-center pl-2 pr-4 py-2 hover:bg-[var(--folder-background)]">
              <img className="w-8" src={gitHubImage} alt="" />
              <p className='text-xl pl-4'>GitHub</p>
            </a>
            <button className="flex items-center pl-2 pr-4 py-2 border-t-2 border-t-white hover:bg-[var(--folder-background)] cursor-pointer"
              onClick={() => {
                onOpenItem("Resume");
                onClose()
              }}>
              <img className="w-8" src={resumeImage} alt="" />
              <p className='text-xl pl-4'>Resume</p>
            </button>
          </div>
        </nav>
      )}

    </>
  )
}