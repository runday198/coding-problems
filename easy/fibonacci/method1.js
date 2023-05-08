// Brute force | Slow | But good space complexity

function climbStairs(n) {
  var first = 1;
  var second = 1;
  var third;
  for (let i = 2; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  return third;
}

console.log(climbStairs(4));
