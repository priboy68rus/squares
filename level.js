function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


class Level {
  grid;
  n;
  rectangles;

  constructor(n) {
    this.n = n;
    this.grid = [];
    let tempa;
    for (let i = 0; i < this.n; i++) {
      tempa = [];
      for (let j = 0; j < this.n; j++) {
        tempa.push(0);
      }
      this.grid.push(tempa);
    }


    this.rectangles = [];
    for (let i = 0; i < this.n; i++) {
      let x1 = getRandomInt(0, this.n);
      let y1 = getRandomInt(0, this.n);
      let x2 = getRandomInt(0, this.n);
      let y2 = getRandomInt(0, this.n);
      this.rectangles.push([x1, y1, x2, y2]);
    }
  }

  flipRectangle(index) {
    let [x1, y1, x2, y2] = this.rectangles[index];

    console.log(x1, y1, x2, y2);
    [x1, x2] = [Math.min(x1, x2), Math.max(x1, x2)];
    [y1, y2] = [Math.min(y1, y2), Math.max(y1, y2)];
    console.log(x1, y1, x2, y2);


    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        this.grid[i][j] = 1 - this.grid[i][j];
      }
    }
  }

  printGrid() {
    console.log(this.grid);
  }

  checkSolution() {
    let solved = true;

    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        if (this.grid[i][j] == 1) {
          solved = false;
        }
      }
    }

    return solved;
  }
}