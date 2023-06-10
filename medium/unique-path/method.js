var uniquePaths = function (m, n) {
  return factorial(m + n - 2) / (factorial(n - 1) * factorial(m - 1));
};

var memo = new Array();

function factorial(k) {
  if (k <= 1) {
    memo[k] = 1;
    return 1;
  } else if (memo[k]) {
    return memo[k];
  }

  memo[k] = k * factorial(k - 1, memo);
  return memo[k];
}
