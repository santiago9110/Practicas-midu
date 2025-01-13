import { TURNS } from "../const";
import { Square } from "./Square";
import { useState } from "react";
import { Turns } from "./Turns";

export const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);
  console.log(turn)
const updateBoard=()=>{

}

  return (
    <>
      <main className="board">
        <section className="game">
          {board.map((square, index) => {
            return (
              <Square 
              key={index} 
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            );
          })}
        </section>

          <Turns turn={turn}></Turns>
       
      </main>
    </>
  );
};
