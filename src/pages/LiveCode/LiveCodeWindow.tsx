import { useEffect, useRef, useState } from "react";
import Editor, { type OnMount } from "@monaco-editor/react"
import * as monaco from "monaco-editor";
import { loader } from "@monaco-editor/react";
import { WindowHeader } from "../../components/WindowHeader";
import type { menuItems } from "../../data/desktopItems";
import { useMaximizable } from "../../hooks/useMaximizable";
import { Tabs } from "./Tabs";
import { PreviewPanel } from "./PreviewPanel";
import { Instructions } from "./Instructions";

interface LiveCodeWindowProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}

export function LiveCodeWindow({ item, onClose }: LiveCodeWindowProps) {
  const [activeTab, setActiveTab] = useState("html");

  const [html, setHtml] = useState("<h1>Welcome to Fennec Code Editor</h1>");
  const [css, setCss] = useState("h1 {color: orange;}");
  const [js, setJs] = useState("console.log('Hai')")

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const { isMaximized, toggleMaximized, isSmallScreen } = useMaximizable();

  const handleEditorChange = (value: string | undefined) => {
    if (activeTab === "html") setHtml(value || "");
    else if (activeTab === "css") setCss(value || "");
    else setJs(value || "");
  };

  //Handle editor theme

  loader.init().then((monaco) => {
    monaco.editor.defineTheme("fennec", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "888888", fontStyle: "italic" },
        { token: "keyword", foreground: "ff007f" },
        { token: "string", foreground: "00ff88" },
      ],
      colors: {
        "editor.background": "#FFDDDF",

        "editor.lineHighlightBackground": "#D5B4FF"
      }
    })
  })

  // Handle editor resizing

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  }

  useEffect(() => {
    if (editorRef.current) {
      setTimeout(() => {
        editorRef.current?.layout();
      }, 0);
    }
  }, [isMaximized])


  if (!item) return
  return (
    <div className={`dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col transition-all duration-350
      ${isMaximized ? 'w-[100vw] h-[100vh] pb-15' : 'h-[80vh] w-fit min-w-[700px] max-w-[700px]'}
    `}>
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} isMaximized={isMaximized} onMaximize={toggleMaximized} disableMaximize={isSmallScreen} />
      <div className="flex flex-1 flex-col items-center bg-[var(--folder-box-color)] dual-border-inner mt-1 px-2 py-2 overflow-y-auto">
        <div className="w-full flex flex-1 flex-col items-center">
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="w-full h-[40vh] flex border-l-8 border-r-8 border-[#2F2240]">
            <Editor
              onMount={handleEditorDidMount}
              language={activeTab === "html" ? "html" : activeTab === "css" ? "css" : "javascript"}
              value={activeTab === "html" ? html : activeTab === "css" ? css : js}
              onChange={handleEditorChange}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
              }}
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row flex-1 bg-[#2F2240] w-full">
            <Instructions />
            <PreviewPanel html={html} css={css} js={js} />
          </div>
        </div>
      </div>
    </div>
  )
}