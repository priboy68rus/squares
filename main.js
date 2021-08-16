const width = 500;
const padding = 3;
let level;

window.onload = function () {
  level = new Level(1);

  updateButtons(level);
  shuffleGrid(level)
  updateGrid(level);
}

function updateGrid(level) {
  drawGrid(width, level.n, padding, level.grid);
}

function createNextLevel(level) {
  if (level.n == 10) {
    alert("You won!");
  } else {
    level = new Level(level.n + 1);
    shuffleGrid(level);
    updateGrid(level);
    updateButtons(level);
  }
}

function shuffleGrid(level) {
  const shuffleLength = 100;

  for (let i = 0; i < shuffleLength; i++) {
    index = getRandomInt(0, level.n);
    level.flipRectangle(index);
    updateGrid(level);
  }
}

function updateButtons(level) {
  var buttonsContainer = document.querySelector("#buttons-container");
  buttonsContainer.innerHTML = "";

  for (let i = 0; i < level.n; i++) {
    let button = document.createElement("button");
    button.innerHTML = `${i}`;
    buttonsContainer.appendChild(button);

    button.addEventListener('click', (e) => {
      e.preventDefault();
      level.flipRectangle(i);
      updateGrid(level);
      if (level.checkSolution()) {
        createNextLevel(level);
      }
    });
  }

}