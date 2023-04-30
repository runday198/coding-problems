// this solution uses a hash table (an iterable of key-value pairs). in JS, Map constructor can be used to implement a hash table. we iterate over the nums array, for each element we calculate the difference between the target and the element, if we have this difference in the Map object, then that means that we have encountered that integer and we can store their indices in variables a and b and return them. if we don't find the difference in the Map object, then we add the current element to numsMap, and continue the iteration.

// performance:
// time complexity of O(n)
// space complexity of O(n)

// NOTE: as you might notice, compared to the brute force method, we have better time complexity and worse space complexity, it's a trade off between runtime and memory.

function twoSum(nums, target) {
  var numsMap = new Map();
  var a;
  var b;

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (numsMap.has(diff)) {
      a = i;
      b = numsMap.get(diff);

      return [a, b];
    }
    numsMap.set(nums[i], i);
  }
}

console.log(twoSum([1, 3, 5, 6, 7], 13));
