// 1) per 90 volte (con un for o un forEach su un array di 90 elementi) bisogna:
// - creare un div
// - riempire il div con un numero progressivo dall'1 al 90
// - appendere il div al DOM
// -> TABELLONE!
const board = document.getElementById("board"); //tabellone
const extractbtn = document.getElementById("extraction"); //btn estrazioni
const resetBtn = document.getElementById("reset");

let cellsArr = [];

const amount = 89; //indice massimo tr a cui estrarre
let index = amount;
const nCells = 90;

let number = [];
let extnumber = [];

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
// Math.random(); // -> torna un numero tra 0 e 1
// Math.random() * 90; // -> 0.00000090 / 89.999999
// Math.ceil(Math.random() * 90); // -> 1 / 90
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

/*
  il resetBtn serve per azzerare tutte le estrazioni e ricominciare da capo una nuova partita. 
  - togliere dalle celle la classe lighted
  -svuotare l'array dei numeri estratti 
  -riformare l'array dei numeri estraibili
*/

resetBtn.addEventListener("click", function () {
  //azzero tutti gli array per poi ricrearli
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
