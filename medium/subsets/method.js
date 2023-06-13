var subsets = function (nums) {
  var result = [];
  result[0] = [];
  dfs(nums, 0, result, []);

  return result;
};

function dfs(nums, index, result, path) {
  for (let i = index; i < nums.length; i++) {
    path.push(nums[i]);

    result.push(Array.from(path));

    dfs(nums, i + 1, result, path);

    path.pop();
  }
}
