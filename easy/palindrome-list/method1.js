function isPalindrome(head) {
  var count = 0;
  var temp = head;

  while (true) {
    count++;
    if (!temp.next) {
      break;
    }
    temp = temp.next;
  }

  if (head.val !== temp.val) {
    return false;
  }

  var mid = Math.floor(count / 2);

  var prev = null;
  var curr = head;

  for (let i = 0; i < mid; i++) {
    let tempNode = head;
    curr = curr.next;

    tempNode.next = prev;
    prev = tempNode;
  }

  if (count % 2 === 1) {
    curr = curr.next;
  }

  while (curr && prev) {
    if (curr.val !== prev.val) {
      return false;
    }
    curr = curr.next;
    prev = prev.next;
  }
  return true;
}
