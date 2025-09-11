import ArrowLeft from '../assets/images/icons/ArrowLeft.svg'
import ArrowRight from '../assets/images/icons/ArrowRight.svg'
import FolderUp from '../assets/images/icons/folder_open.png'
import Cut from '../assets/images/icons/Cut.svg'
import Copy from '../assets/images/icons/Copy.svg'
import Paste from '../assets/images/icons/Paste.svg'
import Delete from '../assets/images/icons/close.svg'

export function ToolBar() {
  return (
    <div className="flex text-lg py-1">
      <div className="flex gap-3 border-r border-r-black pr-2">
        <button className='flex flex-col items-center'><img src={ArrowLeft} className='w-4' alt="" />Back</button>
        <button className='flex flex-col items-center'><img src={ArrowRight} className='w-4' alt="" />Forward</button>
        <button className='flex flex-col items-center'><img src={FolderUp} className='w-4' alt="" />Up</button>
      </div>
      <div className="flex gap-2 border-x border-l-white border-r-black m-0 p-0 px-2">
        <button className='flex flex-col items-center'><img src={Cut} className='w-4' alt="" />Cut</button>
        <button className='flex flex-col items-center'><img src={Copy} className='w-4' alt="" />Copy</button>
        <button className='flex flex-col items-center'><img src={Paste} className='w-4' alt="" />Paste</button>
      </div>
      <div className="flex gap-2 border-l border-l-white m-0 p-0 px-2">
        <button className='flex flex-col items-center'><img src={Delete} className='w-4' alt="" />Delete</button>
      </div>
    </div>
  )
}