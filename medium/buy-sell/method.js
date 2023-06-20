var maxProfit = function (prices) {
  var profit = 0;
  var curStock = prices[0];

  for (var i = 1; i < prices.length; i++) {
    if (curStock < prices[i]) {
      profit += prices[i] - curStock;
    }
    curStock = prices[i];
  }

  return profit;
};
