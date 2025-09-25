type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function TabButton({ label, isActive, onClick }: TabButtonProps)  {
  return (
    <button className={`px-3 py-1.5 ml-4 text-white text-lg rounded-md box-border transition-colors duration-150
        hover:bg-[#6b28bd]
        ${isActive ? "bg-[#7945BA] border-2 border-white" : "bg-[#A07ECB]  " }
      `}
      onClick={onClick}
      > 
      {label}
    </button>
  )
}