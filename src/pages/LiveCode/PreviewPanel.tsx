type PreviewPanelProps = {
  html: string;
  css: string;
}

export function PreviewPanel({ html, css }: PreviewPanelProps) {
  
  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;

  return (
    <iframe srcDoc={srcDoc} title="Live Priview" />
  )
}