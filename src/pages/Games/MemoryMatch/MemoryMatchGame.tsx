import GameFilePng from "../../../assets/images/icons/game_file.png"
import GameDiscPng from "../../../assets/images/icons/game_disc.png"
import GameDolphinePng from "../../../assets/images/icons/game_dolphine.png"
import GameComputerPng from "../../../assets/images/icons/game_computer.png"
import { useState } from "react";
import { SingleCard } from "./SingleCard";

type Card = {id: number, src: string, bgColor: string}

const cardImages = [
  { "src": GameFilePng, "bgColor": "#f8e8c9" },
  { "src": GameDiscPng, "bgColor": "#604cd3" },
  { "src": GameDolphinePng, "bgColor": "#94d3d9" },
  { "src": GameComputerPng, "bgColor": "#f9cfe2" },
];

export function MemoryMatchGame() {

  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0)
  const [choiceOne,setChoiceOne] = useState(null);
  const [choiceTwo,setChoiceTwo] = useState(null);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards: Card[] = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

      setCards(shuffledCards)
      setTurns(0) 
  }

  // Handle a choice
  const handleChoice = (card: Card) => {
    console.log(card)
  }

  return (
    <>
      
      <div className="mt-10 grid grid-cols-4 gap-4">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            bgColor={card.bgColor} 
            handleChoice={handleChoice}  
          />
        ))}
      </div>
      <button onClick={shuffleCards}>New Game</button>
    </>
  )
}