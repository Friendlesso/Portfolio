import SnakeGameIcon from "../assets/images/icons/snakeGame.svg"
import { SnakeGame } from "../pages/Games/Snake/SnakeGame";
import MemoryMatchGameIcon from "../assets/images/icons/memoryMatch.svg"
import { MemoryMatchGame } from "../pages/Games/MemoryMatch/MemoryMatchGame";
import type { ComponentType } from "react";

export interface gamesProps {
  name: string,
  icon: string,
  component: ComponentType<{onClose: () => void}>;
  bgColor: string
}

export const games: gamesProps[] = [
    {
      name: "Snake",
      icon: SnakeGameIcon,
      component: SnakeGame,
      bgColor: "bg-[#0079D5]"
    },
    {
      name: "Memory Match",
      icon: MemoryMatchGameIcon,
      component: MemoryMatchGame,
      bgColor: "bg-[var(--games-header)]"
    },
  ]