const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");


function drawGrid(width, n, pad, grid) {
  const canvasWidth = pad + n * (Math.floor(width / n) + pad);

  context.canvas.width = canvasWidth;
  context.canvas.height = canvasWidth;

  context.fillStyle = "#eee";
  context.fillRect(0, 0, canvasWidth, canvasWidth);


  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      drawSquare(width, n, pad, i, j, grid[i][j]);
    }
  }
}

function drawSquare(width, n, pad, i, j, color) {
  const a = Math.floor(width / n);
  const x = i * (a + pad) + pad;
  const y = j * (a + pad) + pad;

  if (color == 1) {
    context.fillStyle = "#777";
  } else {
    context.fillStyle = "#fff";
  }

  context.fillRect(x, y, a, a);
}