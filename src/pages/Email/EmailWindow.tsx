import { WindowHeader } from "../../components/WindowHeader";
import { menuItems } from "../../data/desktopItems";
import { EmailForm } from "./EmailForm";
import { useMaximizable } from "../../hooks/useMaximizable.ts";
interface EmailWindowProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}
export function EmailWindow({ item, onClose }: EmailWindowProps) {

  const { isMaximized, toggleMaximized } = useMaximizable();

  if (!item) return;
  return (
    <div className={`dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col transition-all duration-350
      ${isMaximized ? 'w-[100vw] h-[100vh] pb-[3.75rem]' : 'h-fit w-[30vw] min-w-[350px] max-w-[950px]'}
    `}>
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose} isMaximized={isMaximized} onMaximize={toggleMaximized} />
      <EmailForm />
    </div>
  )
}