var directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

var exist = function (board, word) {
  var used = Array(board.length)
    .fill(null)
    .map(() => Array(board[0].length).fill(false));

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        used[i][j] = true;

        let result = checkWord(1, word, i, j, used, board);
        if (result) {
          return true;
        }
        used[i][j] = false;
      }
    }
  }

  return false;
};

function isValid(used, row, col, expectedChar, board) {
  return (
    board[row] &&
    board[row][col] &&
    board[row][col] === expectedChar &&
    !used[row][col]
  );
}

function checkWord(charIndex, word, row, col, used, board) {
  if (charIndex === word.length) {
    return true;
  }

  for (const [dx, dy] of directions) {
    let newRow = row + dx;
    let newCol = col + dy;

    if (isValid(used, newRow, newCol, word[charIndex], board)) {
      used[newRow][newCol] = true;
      let result = checkWord(charIndex + 1, word, newRow, newCol, used, board);
      if (result) {
        return true;
      }
      used[newRow][newCol] = false;
    }
  }

  return false;
}
