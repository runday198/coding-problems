function maxProfit(prices) {
  var min = prices[0];
  var profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
}
