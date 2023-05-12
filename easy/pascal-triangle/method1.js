function generate(numRows) {
  var triangle = [[1]];

  for (let row = 1; row < numRows; row++) {
    let newRow = [1];

    for (let col = 1; col < row; col++) {
      newRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
    }
    newRow.push(1);
    triangle.push(newRow);
  }
  return triangle;
}
