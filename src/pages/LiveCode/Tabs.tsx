import { TabButton } from "./TabButton";

type TabsProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Tabs({ activeTab,onTabChange}: TabsProps) {

  const tabs = [
    { label: "index.html", value: "html"},
    { label: "style.css", value: "css"},
    { label: "script.js", value: "js"},
  ];

  return(
    <header className="bg-[#2F2240] w-full px-4 py-2">
      {tabs.map((tab) => (
        <TabButton
          key={tab.value}
          label={tab.label}
          isActive={activeTab === tab.value}
          onClick={() => onTabChange(tab.value)}
        />
      ))}
    </header>
  )
}