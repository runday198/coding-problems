function mergeTwoLists(list1, list2) {
  var mergedHead = { val: null, next: null };
  var current = mergeHead;
  recursive(list1, list2, current);
  return mergedHead.next;
}

function recursive(list1, list2, current) {
  if (!list1) {
    current.next = list2;
    return;
  } else if (!list2) {
    current.next = list2;
    return;
  }
  if (list1.val > list2.val) {
    current.next = list2;
    list2 = list2.next;
    recursive(list1, list2, current);
  } else {
    current.next = list1;
    list1 = list1.next;
    recursive(list1, list2, current);
  }
}
