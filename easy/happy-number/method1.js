function isHappy(n, cache = new Array()) {
  var curr = n;
  var prevValues = [];
  while (true) {
    while (curr % 10 === 0) {
      curr = curr / 10;
    }

    if (curr === 1 || cache.includes(curr)) {
      cache = [...cache, ...prevValues];
      return true;
    } else if (prevValues.includes(curr)) {
      return false;
    }

    prevValues.push(curr);

    curr = digitSquares(curr);
  }
}

function digitSquares(n) {
  n = n.toString().split("");

  return n.reduce((prevValue, el) => {
    return prevValue + Number(el) ** 2;
  }, 0);
}

console.log(isHappy(100));
