import { WindowHeader } from "../../components/WindowHeader";
import { useMaximizable } from "../../hooks/useMaximizable.ts";
import TextFilePng from "../../assets/images/icons/text_file.svg"
import { FileMenuBar } from "../../components/FileMenuBar.tsx";
import { useEffect, useState } from "react";
interface TextFileProps {
  fileId: string;
  onClose: () => void
  label: string
}
export function TextFile({ onClose,fileId, label }: TextFileProps) {

  const { isMaximized, toggleMaximized } = useMaximizable();
  const [text, setText] = useState("");

  //Key for sessionStorage
  const STORAGE_KEY = `textfile-${fileId}`;

  useEffect(() => {
    const savedText = sessionStorage.getItem(STORAGE_KEY)
    if(savedText) setText(savedText)
  },[STORAGE_KEY])

  const handleSave = () => {
    sessionStorage.setItem(STORAGE_KEY, text);
  }
  return (
    <div className={`dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col transition-all duration-350
        ${isMaximized ? 'w-[100vw] h-[100vh] pb-[3.75rem]' : 'h-[50vh] w-[30vw] min-w-[550px] max-w-[950px]'}
      `}>
      <header>
        <WindowHeader
          label={label}
          icon={TextFilePng}
          bgColor={"bg-[#41009D]"}
          onClose={onClose}
          isMaximized={isMaximized}
          onMaximize={toggleMaximized}
        />
      </header>
      <div className="bg-[var(--folder-box-color)] px-3">
        <FileMenuBar version="10.04" fileSize="0 bytes" headerColor="bg-[#41009D]" hoverColor="hover:text-[#41009D]" onSave={handleSave} />
      </div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full h-full text-lg resize-none outline-none p-2 dual-border-inner bg-[var(--folder-box-color)]"></textarea>
    </div>
  )
}