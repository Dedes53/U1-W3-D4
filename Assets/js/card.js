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
