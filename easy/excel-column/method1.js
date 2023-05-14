function titleToNumber(columnTitle) {
  var length = columnTitle.length - 1;
  var columnNum = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    columnNum += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - i);
  }
  return columnNum;
}
