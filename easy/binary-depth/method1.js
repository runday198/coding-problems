function maxDepth(root) {
  if (!root) {
    return 0;
  }

  var count = 0;
  var depthArr = [];
  recursive(root, count, depthArr);
  return Math.max(depthArr);
}

function recursive(root, count, depthArr) {
  if (!root) {
    depthArr.push(count);
    return;
  }
  count++;
  var tempLeft = count;
  var tempRight = count;
  recursive(root.left, tempLeft, depthArr);
  recursive(root.right, tempRight, depthArr);
}
