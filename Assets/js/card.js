const cardContainer = document.getElementById("cardContainer");

function createCard() {
  const card = document.createElement("div");
  card.classList.add("bingo-card");

  const numbers = generateUniqueNumbers(15, 1, 90);

  numbers.forEach((num) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = num;
    card.appendChild(cell);
  });

  cardContainer.appendChild(card);
}
