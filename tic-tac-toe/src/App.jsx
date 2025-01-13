/* eslint-disable react/prop-types */


import "./App.css";
import { useState } from "react";
import {Square} from "./components/Square"
import {TURNS } from "./const"
import { checkWinner,checkEndGame } from "./Logic/board";
import { Winner } from "./components/Winner";
function App() {
  const [board, setBoard] = useState(()=>{
    const boardFromLocalStorage=window.localStorage.getItem("board")
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  });

  const [turn, setTurn] = useState(()=>{
    const turnFromLocalStorage=window.localStorage.getItem("turn");

    return turnFromLocalStorage ? JSON.parse(turnFromLocalStorage) : TURNS.X
  }

    
  );

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board]; //actualizar tablero
    newBoard[index] = turn;
    console.log(newBoard[index]);
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; //actualizar turno
    setTurn(newTurn);

    //Guardar partida
    window.localStorage.setItem("board",JSON.stringify(newBoard));
    window.localStorage.setItem("turn",JSON.stringify(newTurn));


    //REVISAR SI HAY GANADOR
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    
    }else if(checkEndGame(newBoard)){
      setWinner(false)
     
    }
  };

 const resetGame=()=>{
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
   }
  
  return (
    <main className="board">
      <section className="game">
        {board.map((_, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {board[index]}{" "}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

     <Winner winner={winner}
              resetGame={resetGame}  
     ></Winner>
    </main>
  );
}

export default App;
