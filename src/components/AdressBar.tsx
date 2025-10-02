interface AdressBarProps {
  adress: string
}
export function AdressBar({adress}: AdressBarProps) {
  return (
    <div className="flex items-center gap-1 text-lg">
      <p>Adress:</p>
      <div className="w-full bg-white">
        <p className="text-black px-1">C:user/Administrator/Desktop/{adress}</p>
      </div>
    </div>
  )
}