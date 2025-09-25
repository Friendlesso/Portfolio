import { useState } from "react";
import { WindowHeader } from "../../components/WindowHeader";
import type { menuItems } from "../../data/desktopItems";
import { useMaximizable } from "../../hooks/useMaximizable";
import { Tabs } from "./Tabs";
import { EditorPanel } from "./EditorPanel";
import { PreviewPanel } from "./PreviewPanel";
import { Instructions } from "./Instructions";

interface LiveCodeWindowProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function LiveCodeWindow({ item, onClose }: LiveCodeWindowProps) {
  const [activeTab, setActiveTab] = useState("html");

  const [html, setHtml] = useState("<h1>Welcome to Fennec Code Editor</h1>");
  const [css, setCss] = useState("h1 {color: red;}");


  const { isMaximized, toggleMaximized, isSmallScreen } = useMaximizable();

  if (!item) return
  return (
    <div className={`dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col transition-all duration-350
      ${isMaximized ? 'w-[100vw] h-[100vh] pb-15' : 'h-[80vh] w-fit min-w-[650px] max-w-[950px]'}
    `}>
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} isMaximized={isMaximized} onMaximize={toggleMaximized} disableMaximize={isSmallScreen} />
      <div className="flex flex-1 flex-col items-center bg-[var(--folder-box-color)] dual-border-inner mt-1 px-2 py-2 overflow-y-auto">
        <div className="w-full flex flex-1 flex-col items-center">
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
          <EditorPanel activeTab={activeTab} html={html} css={css} onHtmlChange={setHtml} onCssChange={setCss} />
          <div className="flex flex-1 bg-[#2F2240] w-full">
            <Instructions />
            <PreviewPanel html={html} css={css} />
          </div>
        </div>
      </div>
    </div>
  )
}