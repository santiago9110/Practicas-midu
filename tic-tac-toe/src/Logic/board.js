import {WINNER_COMBOS} from "../const.js"
  export const checkWinner = (boardToCheck) => {
    //revisamos todas las convinaciones ganadoras
    //para ver si x u o gana
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };


export  const checkEndGame=(newBoard)=>{
    return newBoard.every((square)=>square!=null);
  }

