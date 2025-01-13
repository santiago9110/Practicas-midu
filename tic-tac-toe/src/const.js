export const TURNS = {
  X: "x",
  O: "o",
};


//HACERLA MEJOR
export const WINNER_COMBOS = [
  // Horizontales
  [0, 1, 2], // Primera fila
  [3, 4, 5], // Segunda fila
  [6, 7, 8], // Tercera fila

  // Verticales
  [0, 3, 6], // Primera columna
  [1, 4, 7], // Segunda columna
  [2, 5, 8], // Tercera columna

  // Diagonales
  [0, 4, 8], // Diagonal principal
  [2, 4, 6], // Diagonal secundaria
];
