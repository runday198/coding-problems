function removeNode(head, n) {
  var curr = head;
  var nodeArr = [];
  while (curr) {
    nodeArr.push(curr);
    curr = curr.next;
  }
  var len = nodeArr.length;
  if (len - n - 1 < 0) {
    return head.next;
  } else if (len - n + 1 > len - 1) {
    nodeArr[len - n - 1].next = null;
    return head;
  } else {
    let prev = nodeArr[len - n - 1];
    let next = nodeArr[len - n + 1];
    prev.next = next;
    return head;
  }
}
