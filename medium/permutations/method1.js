var permute = function (nums) {
  var res = [];
  console.time();
  dfs(nums, [], Array(nums.length).fill(false), res);
  console.timeEnd();
  return res;
};

function dfs(nums, path, used, res) {
  if (path.length === nums.length) {
    res.push(Array.from(path));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) {
      continue;
    }

    path.push(nums[i]);
    used[i] = true;
    dfs(nums, path, used, res);

    path.pop();
    used[i] = false;
  }
}

permute([1, 2, 3, 4, 5, 6]);
