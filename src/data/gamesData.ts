import SnakeGameIcon from "../assets/images/icons/snakeGame.png"
import MemoryMatchGameIcon from "../assets/images/icons/memoryMatch.svg"

export interface gamesProps {
  name: string,
  icon: string,
}

export const games: gamesProps[] = [
  {
    name: "Snake",
    icon: SnakeGameIcon,
  },
  {
    name: "Memory Match",
    icon: MemoryMatchGameIcon,
  },
]