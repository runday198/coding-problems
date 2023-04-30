function romanToInt(s) {
  var romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var returnVal = 0;
  var prevVal;
  for (let i = s.length - 1; i >= 0; i--) {
    let currentVal = romanToInt[s[i]];
    if (!prevVal) {
      returnVal += currentVal;
      prevVal = s[i];
    } else if (romanToInt[prevVal] > currentVal) {
      returnVal -= currentVal;
      prevVal = s[i];
    } else {
      returnVal += currentVal;
      prevVal = s[i];
    }
  }
  return returnVal;
}

console.log(romanToInt("MCMXCIV"));
