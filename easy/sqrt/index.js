function mySqrt(x) {
  return binary(x, Math.floor(x / 2), x);
}

function binary(prevGuess, guess, x) {
  if (guess ** 2 === x) {
    return guess;
  }

  if (guess ** 2 > x) {
    if ((guess - 1) ** 2 <= x) {
      return guess - 1;
    } else {
      return binary(guess, Math.floor(guess / 2), x);
    }
  } else if (guess ** 2 < x) {
    if ((guess + 1) ** 2 > x) {
      return guess;
    } else {
      return binary(prevGuess, Math.floor((prevGuess + guess) / 2), x);
    }
  }
}

console.log(mySqrt(8));
