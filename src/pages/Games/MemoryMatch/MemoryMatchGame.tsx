import GameFilePng from "../../../assets/images/icons/game_file.png"
import GameDiscPng from "../../../assets/images/icons/game_disc.png"
import GameDolphinePng from "../../../assets/images/icons/game_dolphine.png"
import GameComputerPng from "../../../assets/images/icons/game_computer.png"
import GameIconPng from "../../../assets/images/icons/memoryMatch.svg"
import GameBackground from "../../../assets/images/icons/MMGameBg.jpg"
import { WindowHeader } from "../../../components/WindowHeader"
import { useEffect, useState } from "react";
import { SingleCard } from "./SingleCard";


type Card = { id: number, src: string, bgColor: string, matched: boolean }

interface MemoryGameProps {
  onClose: () => void
}

const cardImages = [
  { "src": GameFilePng, "bgColor": "#f8e8c9", matched: false },
  { "src": GameDiscPng, "bgColor": "#604cd3", matched: false },
  { "src": GameDolphinePng, "bgColor": "#94d3d9", matched: false },
  { "src": GameComputerPng, "bgColor": "#f9cfe2", matched: false },
];

export function MemoryMatchGame({ onClose }: MemoryGameProps) {

  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false)

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards: Card[] = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  // Handle a choice
  const handleChoice = (card: Card) => {
    if (choiceOne) {
      setChoiceTwo(card)
    } else {
      setChoiceOne(card)
    }
  }

  // Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  // Reste choices & increse turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(disabled)
  }

  //Start game automaticlly
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <>
      <div className="w-[40vh] h-[56vh] bg-cover border-8 border-white rounded-md" style={{ backgroundImage: `url(${GameBackground})` }}>
        <header>
          <WindowHeader
            label="Memory-Match"
            icon={GameIconPng}
            bgColor="bg-[#0079D5]"
            onClose={onClose}
          />
        </header>
        <div className="mt-10 grid grid-cols-4 gap-4 mx-2">
          {cards.map(card => (
            <SingleCard
              key={card.id}
              card={card}
              bgColor={card.bgColor}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <div className="flex flex-col items-center mt-[30%]">
          <p className="text-xl text-[#11509c]">Turns: {turns}</p>
          <button
            onClick={shuffleCards}
            className="text-[#11509c] bg-[#B1D7DB] border-[#1A68C5] cursor-pointer opacity-85 rounded-xl border-4 text-2xl px-6 py-2"
          >
            New Game
          </button>
        </div>
      </div>
    </>
  )
}