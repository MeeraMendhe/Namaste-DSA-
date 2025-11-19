/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let newNode = new ListNode();
  let result = newNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      newNode.next = list1;
      list1 = list1.next;
    } else {
      newNode.next = list2;
      list2 = list2.next;
    }
    newNode = newNode.next;
  }
  if (list1) {
    newNode.next = list1;
  }
  if (list2) {
    newNode.next = list2;
  }

  return result.next;
};
