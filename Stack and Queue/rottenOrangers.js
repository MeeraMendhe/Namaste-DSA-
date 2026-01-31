var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let min = 0;
  let queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    let size = queue.length;
    let rotted = false;

    for (let k = 0; k < size; k++) {
      let [i, j] = queue.shift();

      let r = checkVal(i, j, "right", grid);
      let l = checkVal(i, j, "left", grid);
      let t = checkVal(i, j, "top", grid);
      let b = checkVal(i, j, "bottom", grid);

      if (r || l || t || b) rotted = true;

      r && queue.push(r);
      l && queue.push(l);
      t && queue.push(t);
      b && queue.push(b);
    }

    if (rotted) min++;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return min;
};

function checkVal(i,j, val, grid) {
  if (val == "right" && i+1<grid.length) {
    if (grid[i + 1][j] == 1) {
      grid[i + 1][j] = 2;
      return [i + 1,j];
    }else return null
  } else if (val == "left" && i-1>=0) {
    if (grid[i - 1][j] == 1) {
      grid[i - 1][j] = 2;
      return [i - 1,j];
    }else return null
  } else   if (val == "bottom" && j+1<grid[0].length) {
    if (grid[i][j+1] == 1) {
      grid[i][j+1] = 2;
      return [i,j+1];
    }else return null
  }else if (val == "top" && j-1>=0) {
    if (grid[i][j-1] == 1) {
      grid[i][j-1] = 2;
      return [i,j-1];
    }else return null
  }
}
let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(orangesRotting(grid));
