var permute = function (nums) {
  var res = [];
  console.time();
  dfs(nums, new Set(), res);
  console.timeEnd();
  return res;
};

function dfs(nums, path, res) {
  if (path.size === nums.length) {
    res.push(Array.from(path));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (path.has(nums[i])) {
      continue;
    }

    path.add(nums[i]);
    dfs(nums, path, res);

    path.delete(nums[i]);
  }
}

permute([1, 2, 3, 4, 5, 6]);
