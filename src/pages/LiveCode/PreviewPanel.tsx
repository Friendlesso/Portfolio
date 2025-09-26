type PreviewPanelProps = {
  html: string;
  css: string;
  js: string;
}

export function PreviewPanel({ html, css, js }: PreviewPanelProps) {

  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className="flex flex-1 items-center justify-center bg-white m-2">
      <iframe className="w-full h-full flex overflow-hidden" srcDoc={srcDoc} title="Live Priview" />
    </div>
  )
}