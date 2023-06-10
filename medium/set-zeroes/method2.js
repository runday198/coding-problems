var setZeroes = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        setUndefined(matrix, i, j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === undefined) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

function setUndefined(matrix, row, col) {
  for (let i = 0; i < matrix[row].length; i++) {
    if (matrix[row][i] !== 0) {
      matrix[row][i] = undefined;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][col] !== 0) {
      matrix[i][col] = undefined;
    }
  }
}
