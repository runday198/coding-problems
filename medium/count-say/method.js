var countAndSay = function (n) {
  return recursive(n);
};

function recursive(n) {
  if (n === 1) {
    return "1";
  }
  var count = 0;
  var string = "";
  var digits = recursive(n - 1);

  var lastDigit = "";
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== lastDigit && count !== 0) {
      string += `${count}${lastDigit}`;
      lastDigit = digits[i];
      count = 1;
    } else {
      lastDigit = digits[i];
      count++;
    }
  }
  string += `${count}${lastDigit}`;

  return string;
}
