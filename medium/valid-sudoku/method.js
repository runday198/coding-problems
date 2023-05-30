var isValidSudoku = function (board) {
  var boxSet = new Set();
  for (let i = 0; i < board.length; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== ".") {
        if (rowSet.has(board[i][j]) || !checkBox(boxSet, i, j, board)) {
          return false;
        } else {
          rowSet.add(board[i][j]);
        }
      }

      if (board[j][i] !== ".") {
        if (colSet.has(board[j][i])) {
          return false;
        } else {
          colSet.add(board[j][i]);
        }
      }
    }
  }
  return true;
};

function checkBox(boxSet, row, col, board) {
  var y = row + 1;
  var x = col + 1;

  var box = `${Math.ceil(x / 3)}_${Math.ceil(y / 3)}_${board[row][col]}`;

  if (boxSet.has(box)) {
    return false;
  } else {
    boxSet.add(box);
    return true;
  }
}
