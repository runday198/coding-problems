//  2,147,483,648

function reverse(x) {
  var xStr = x.toString();
  var result = "";
  for (let i = xStr.length - 1; i >= 0; i--) {
    if (xStr[i] === "-") {
      result = "-" + result;
      continue;
    }
    result += xStr[i];
  }
  if (Number(result) > 2147483648 || Number(result) < -2147483648) {
    return 0;
  }
  return Number(result);
}
