import { WindowHeader } from "../../components/WindowHeader";
import { menuItems } from "../../data/desktopItems";
import { EmailForm } from "./EmailForm";
interface EmailWindowProps {
  item: typeof menuItems[0] | null
  onClose: () => void
}
export function EmailWindow({ item, onClose }: EmailWindowProps) {
  if (!item) return;
  return (
    <div className="dual-border-folder p-1 bg-[var(--folder-background)] flex flex-col h-fit w-[50vw] min-w-[350px] max-w-[950px] ">
      <WindowHeader label={item.label} icon={item.icon} bgColor={item.headerColor} onClose={onClose}  />
      <EmailForm />
    </div>
  )
}