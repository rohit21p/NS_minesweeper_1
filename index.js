let grid = document.getElementById("grid");
let maxRows = 9,
  maxColumns = 9,
  score = 0;
for (let i = 0; i < maxRows; i++) {
  for (let j = 0; j < maxColumns; j++) {
    let cell = document.createElement("div");
    cell.className = "cell blank";
    cell.id = i + "" + j;
    cell.onclick = cellClicked;
    grid.appendChild(cell);
  }
}

let numbers = [];

numbers = [...selectRandomBombIndices(10)];

function selectRandomBombIndices(value) {
  let set = new Set();
  while (set.size !== value) {
    let i = Math.floor(Math.random() * maxRows);
    let j = Math.floor(Math.random() * maxColumns);
    let bomb = document.getElementById(i + "" + j);
    bomb.onclick = bombClicked;
    set.add(i + "" + j);
  }
  return set;
}

console.log(numbers);

function cellClicked(e) {
  e.target.classList.add("safe");
  e.target.onclick = null;
  score++;
  if (score === 71) {
    document.querySelector(".endscreen").classList.remove("hidden");
    document.getElementById("gameMsg").innerText =
      "Congratulations you won the game";
    gamceOVer();
  }
}

function bombClicked(e) {
  numbers.forEach((num) => {
    let bomb = document.getElementById(num);
    bomb.innerHTML = "B";
    bomb.classList.add("bomb");
  });
  gamceOVer();
}

function gamceOVer() {
  setTimeout(() => {
    document.querySelector(".endscreen").classList.remove("hidden");
    document.querySelector(".end-score").innerText = score;
    document.querySelector(".restart").addEventListener("click", (e) => {
      window.location.reload();
    });
  }, 800);
}
