var reverse = function (x) {
  var maxInt = 2147483648 / 10;

  var xArr = x.toString().split("");
  var isNegative = x < 0;
  var result = 0;

  while (xArr.length !== 0) {
    let digit = Number(xArr.pop());
    if (isNaN(digit)) {
      continue;
    }
    if (result > maxInt || (result === maxInt && digit > 7)) {
      return 0;
    }
    result = result * 10 + digit;
  }
  if (isNegative) {
    result *= -1;
  }
  return result;
};
