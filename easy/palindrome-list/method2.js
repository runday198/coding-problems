function isPalindrome(head) {
  var slow = head;
  var fast = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow = slow.next;

  var prev = null;
  while (slow) {
    let temp = slow;
    slow = slow.next;

    temp.next = prev;
    prev = temp;
  }

  while (prev && head) {
    if (prev.val !== head.val) {
      return false;
    }

    prev = prev.next;
    head = head.next;
  }

  return true;
}
