import { useEffect } from "react"
import { startGame } from "./snake"
export function SnakeGame() {

  useEffect(() => {
    startGame("game-board", "instruction-text", "score", "highScore");
  },[])

  return (
    <div className="flex items-center justify-center h-[100vh] bg-black">
      <div>
        <div className="justify-between flex text-[2.5rem]">
          <h1 id="score" className="text-[#6EAF42]">000</h1>
          <h1 id="highScore" className="text-[#dee9d6] hidden">000</h1>
        </div>
        <div className="border-10 border-[#578A34] rounded-[36px] shadow-[inset_0_0_0_10px_#578A34]">
          <div className="border-8 border-[#6EAF42] rounded-[26px] shadow-[inset_0_0_0_10px_#6EAF42]">
            <div className="border-20 border-[#79C943] rounded-[20px] shadow-[inset_0_0_0_5px_#79C943] bg-[#8fa580]">
              <div id="game-board" className="m-1.5 rounded-[100px] grid grid-cols-[repeat(20,20px)] grid-rows-[repeat(20,20px)]"></div>
            </div>
          </div>
        </div>
      </div>
      <h1 id="instruction-text" className="absolute top-[60%] text-[#333] text-center capitalize p-5">Press spacebar to play</h1>
    </div>
  )
}