const cardContainer = document.getElementById("cardContainer");

//9 colonne
//3 righe
//15 numeri totali
//27 caselle totali
const cells = 27;
const numbers = 15;

function createCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  //creazione delle celle della cartella.
  for (let i = 1; i <= cells; i++) {
    const cell = document.createElement("div");
    cell.textContent = i;
    cell.classList.add("cardCells");
    card.appendChild(cell);
  }
}
cardContainer.appendChild(card);

//funzione che mi deve servire per scegliere 15 delle 27 celle della cartella.
function extCell() {}
function generateUniqueNumbers(quantity, min, max) {
  const nums = [];

  while (nums.length < quantity) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!nums.includes(rand)) {
      nums.push(rand);
    }
  }

  return nums;
}

createCard();
