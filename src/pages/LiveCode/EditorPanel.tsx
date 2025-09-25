type EditorPanelProps = {
  activeTab: string;
  html: string;
  css: string;
  onHtmlChange: (val: string) => void;
  onCssChange: (val: string) => void;
}

export function EditorPanel({  
  activeTab,
  html,
  css,
  onHtmlChange,
  onCssChange,
}: EditorPanelProps) {
  return (
    <section className="w-full h-[50vh] flex items-center justify-center border-l-4 border-r-4 border-l-[#2F2240] border-r-[#2F2240]">
      {activeTab === "html" && (
        <textarea value={html} className="w-full h-full text-xl p-1 resize-none focus:outline-none" onChange={(e) => onHtmlChange(e.target.value)} />
      )}
      {activeTab === "css" && (
        <textarea value={css} className="w-full h-full text-xl p-1 resize-none focus:outline-none" onChange={(e) => onCssChange(e.target.value)} />
      )}
    </section>
  )
}