/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set=new Set();
    let currentA=headA
    while(currentA)
    {
       set.add(currentA)
       currentA=currentA.next
    }
    let currentB=headB;
    while(currentB){
        if(set.has(currentB)){
           return currentB
        }
        currentB=currentB.next
    }
    return null
};