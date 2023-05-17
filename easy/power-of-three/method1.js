function isPowerOfThree(n) {
  if (n === 0) {
    return false;
  }

  while (Number.isInteger(n)) {
    n /= 3;
    if (n === 3) {
      return true;
    }
  }
  return false;
}
