import GameComputerPng from "../../../assets/images/icons/game_computer.png"

type Card = {id: number, src: string, bgColor: string}

interface SingleCardProps {
  card: Card
  bgColor: string
  handleChoice: (card: Card) => void
}

export function SingleCard({ card,handleChoice }: SingleCardProps) {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="relative">
      <div>
        <img className="w-full block border-4 border-[#1A68C5] rounded-md" style={{backgroundColor: card.bgColor}} src={card.src} alt="card front" />
        <img 
          className="w-full block border-4 border-[#1A68C5] rounded-md" 
          src={GameComputerPng} 
          alt="card back"
          onClick={handleClick} 
        />
      </div>
    </div>
  )
}