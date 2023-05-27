var myAtoi = function (s) {
  var hadDigit = false;
  var isNegative = false;
  var result = "";
  for (let i = 0; i < s.length; i++) {
    if (!hadDigit && s[i] === " ") {
      continue;
    }
    if (!hadDigit && (s[i] === "-" || s[i] === "+")) {
      isNegative = s[i] === "-";
      hadDigit = true;
      continue;
    }

    if (!s[i].match(/[0-9]/)) {
      break;
    }

    if (s[i].match(/[0-9]/)) {
      hadDigit = true;
      result += s[i];
    }
  }
  if (isNegative && -Number(result) < -2147483648) {
    return -2147483648;
  } else if (isNegative) {
    return -1 * Number(result);
  } else if (Number(result) >= 2147483648) {
    return 2147483647;
  } else {
    return Number(result);
  }
};
