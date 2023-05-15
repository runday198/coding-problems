function hammingWeight(n) {
  var index = 32;
  var count = 0;

  while (index--) {
    let temp = n & 1;
    if (temp === 1) {
      count++;
    }
    n = n >> 1;
  }
  return count;
}
