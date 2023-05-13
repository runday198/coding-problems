function hasCycle(head) {
  var hare = head;
  var tortoise = head;

  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (tortoise === hare) {
      return true;
    }
  }
  return false;
}
