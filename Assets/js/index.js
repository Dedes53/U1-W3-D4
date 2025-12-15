const board = document.getElementById("board"); //tabellone
const extractbtn = document.getElementById("extraction"); //btn estrazioni
const resetBtn = document.getElementById("reset"); //btn reset

const amount = 89; //indice massimo tr a cui estrarre
let index = amount; //indice per le estrazioni

const nCells = 90; //n. di celle del tabellone

let cellsArr = []; //variabile dove salvare tutte le celle del tabellone
let number = []; //variabile con i numeri da estrarre
let extnumber = []; //variabile con i nimeri estratti

// 1) per 90 volte (con un for o un forEach su un array di 90 elementi) bisogna:
// - creare un div
// - riempire il div con un numero progressivo dall'1 al 90
// - appendere il div al DOM
// -> TABELLONE!
function createBoard() {
  for (let i = 1; i <= nCells; i++) {
    const div = document.createElement("div");
    div.classList.add("cell", "blocked");
    div.innerText = i;
    board.appendChild(div);
    number.push(i);
  }
  cellsArr = Array.from(document.querySelectorAll(".cell"));
}
createBoard();
console.log(number);

// 2) fare un button e collegarci una funzione: questa funzione deve ESTRARRE CASUALMENTE un numero dall'1 al 90
extractbtn.addEventListener("click", function () {
  //estraiamo casualmente lìindice dell'elemento estratto
  const n = Math.floor(Math.random() * index);
  extN = number[n];
  //avendo l'indice aggiungiamo la classe alla casella della tombola e la rimuoviamo tra quelle da estrarre
  cellsArr[n].classList.add("lighted");
  cellsArr.splice(n, 1);
  //troviamo l'elemento nell'array dei numeri disponibili, lo rimuoviamo e lo salviamo nell'array dei numeri estratti
  console.log(extN);
  number.splice(n, 1);
  extnumber.push(extN);

  console.log(number, extnumber);
  index--; //riduciamo l'inice di uno ogni volta che un numero viene estratto e quindi l'array diminuisce di uno
});

//azzero tutti gli array per poi ricrearli
resetBtn.addEventListener("click", function () {
  cellsArr.lenght = 0;
  number.length = 0;
  extnumber.length = 0;

  cellsArr = Array.from(document.querySelectorAll(".cell"));
  cellsArr.forEach((cell) => cell.classList.remove("lighted"));

  for (let i = 1; i < nCells; i++) {
    number.push(i);
  }

  index = amount;
  console.log(number, extnumber);
});
