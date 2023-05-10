function inorderTraversal(root) {
  var curNode = root;
  var prevNodes = [];
  var returnArr = [];

  while (true) {
    if (!curNode) {
      return returnArr;
    }

    if (curNode.left) {
      prevNodes.push(curNode);
      let temp = curNode;
      curNode = curNode.left;

      temp.left = null;

      continue;
    }

    if (curNode.val !== undefined) {
      returnArr.push(curNode.val);
    }
    curNode.val = undefined;

    if (curNode.right) {
      prevNodes.push(curNode);
      let temp = curNode;
      curNode = curNode.right;
      temp.right = null;
      continue;
    }

    curNode = prevNodes.pop();
  }
}
