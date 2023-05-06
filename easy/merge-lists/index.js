var mergeTwoLists = function (list1, list2) {
  var mergeHead = { val: null, next: null };
  var current = mergeHead;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;

  return mergeHead.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
