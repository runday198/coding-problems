function inorderTraversal(root) {
  var curNode = root;
  var prevNodes = [];
  var returnArr;
  var count = 0;

  while (true) {
    if (curNode.val === root.val) {
      count++;
    }
    if (count === 3) {
      return returnArr;
    }

    if (curNode.left) {
      prevNodes.push(curNode);
      let temp = curNode;
      curNode = curNode.left;

      temp.left = null;

      continue;
    }

    returnArr.push(curNode.val);

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
