import { WindowHeader } from "../../components/WindowHeader";
import { useMaximizable } from "../../hooks/useMaximizable.ts";
import TextFilePng from "../../assets/images/icons/text_file.svg"
interface TextFileProps {

  onClose: () => void
}
export function TextFile({ onClose }: TextFileProps) {

  const { isMaximized, toggleMaximized } = useMaximizable();

  return (
      <div className={`dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col transition-all duration-350
        ${isMaximized ? 'w-[100vw] h-[100vh] pb-[3.75rem]' : 'h-[50vh] w-[30vw] min-w-[550px] max-w-[950px]'}
      `}>
        <WindowHeader
          label={"TextFile"}
          icon={TextFilePng}
          bgColor={"bg-[#41009D]"}
          onClose={onClose}
          isMaximized={isMaximized}
          onMaximize={toggleMaximized}
        />
        <textarea className="w-full h-full resize-none outline-none p-2 dual-border-inner bg-[var(--folder-box-color)]"></textarea>
      </div>
  )
}