var removeNthFromEnd = function (head, n) {
  var slow = head;
  var fast = head;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  if (!fast) {
    return head.next;
  }

  while (fast) {
    if (fast.next === null) {
      slow.next = slow.next.next;
      return head;
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }
};
