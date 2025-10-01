import SnakeGameIcon from "../assets/images/icons/snakeGame.svg"
import { SnakeGame } from "../pages/Games/SnakeGame";
import MemoryMatchGameIcon from "../assets/images/icons/memoryMatch.svg"
import { MemoryMatchGame } from "../pages/Games/MemoryMatch/MemoryMatchGame";
import type { ComponentType } from "react";

export interface gamesProps {
  name: string,
  icon: string,
  component: ComponentType<{onClose: () => void}>;
}

export const games: gamesProps[] = [
    {
      name: "Snake",
      icon: SnakeGameIcon,
      component: SnakeGame
    },
    {
      name: "Memory Match",
      icon: MemoryMatchGameIcon,
      component: MemoryMatchGame
    },
  ]