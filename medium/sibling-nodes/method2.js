var connect = function (root) {
  var queue = [root];
  var index = 0;
  var leftNode = null;

  while (queue[index]) {
    let node = queue[index];
    leftNode = node?.next?.left || null;

    if (node.right) {
      queue.push(node.right);
      queue.push(node.left);
      node.right.next = leftNode;
      node.left.next = node.right;
    }

    index++;
  }

  return root;
};
