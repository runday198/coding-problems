var levelOrder = function (root) {
  var queue = [root];
  var result = [];
  var index = 0;
  var prevCount = 0;
  var curCount = 0;
  var level = 0;

  if (root) {
    result.push([root.val]);
  }

  while (true) {
    if (!queue[index]) {
      break;
    }

    if (prevCount > 0) {
      prevCount--;
    } else {
      prevCount = curCount - 1;
      curCount = 0;
      level++;
    }

    let node = queue[index];
    let temp = result[level] || [];

    if (node.left) {
      queue.push(node.left);
      temp.push(node.left.val);
      curCount++;
    }

    if (node.right) {
      queue.push(node.right);
      temp.push(node.right.val);
      curCount++;
    }

    if (temp.length > 0) {
      result[level] = temp;
    }

    index++;
  }

  return result;
};
