// 1) per 90 volte (con un for o un forEach su un array di 90 elementi) bisogna:
// - creare un div
// - riempire il div con un numero progressivo dall'1 al 90
// - appendere il div al DOM
// -> TABELLONE!
const board = document.getElementById("board");

function createBoard() {
  const nCells = 90;
  for (let i = 1; i <= nCells; i++) {
    const div = document.createElement("div");
    div.classList.add("cell", "blocked");
    div.innerText = i;
    board.appendChild(div);
  }
}
createBoard();
// 2) fare un button e collegarci una funzione: questa funzione deve ESTRARRE CASUALMENTE un numero dall'1 al 90
Math.random(); // -> torna un numero tra 0 e 1
Math.random() * 90; // -> 0.00000090 / 89.999999
Math.ceil(Math.random() * 90); // -> 1 / 90

// 3) Una volta estratto un numero casuale, la casella corrispondente del tabellone deve illuminarsi

console.log(document.querySelectorAll(".day"));
// dovete ciclare questo array, e confrontare il suo contenuto testuale (es. '1', '2', '3, '4' etc.) con il numero appena estratto (es. 5)
// troverete UN match, e a questo div dovete assegnare una classe css ('estratto')
