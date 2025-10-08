import BackIconPng from "../../../assets/images/icons/game_back.png"


type Card = { id: number, src: string, bgColor: string, matched: boolean }

interface SingleCardProps {
  card: Card
  bgColor: string
  handleChoice: (card: Card) => void
  flipped: boolean
  disabled: boolean
}

export function SingleCard({ card, handleChoice, flipped, disabled }: SingleCardProps) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="relative">
      <div className={`${flipped ? "" : ""}`}>
        <img
          className={`w-full block ${flipped ? "transfrom rotate-y-0 delay-200" : "transfrom rotate-y-90 ease-in duration-200"} absolute transition-all border-4 border-[#1A68C5] rounded-lg`}
          style={{ backgroundColor: card.bgColor }}
          src={card.src}
          alt="card front"
          loading="lazy"
        />
        <img
          className={`w-full block${flipped ? "transfrom rotate-y-90 delay-0" : "ease-in delay-200"} transition-all border-4 border-[#1A68C5] bg-[#94D3DA] rounded-lg`}
          src={BackIconPng}
          alt="card back"
          onClick={handleClick}
          loading="lazy"
        />
      </div>
    </div>
  )
}