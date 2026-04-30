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
    let pA=headA
    let pB=headB
    let m=0
    let n=0
    while(pA){
         pA=pA.next
         m++
    }
    while(pB){
         pB=pB.next
         n++
    }
    if(m>n){
        let x=m-n;
        while(x!=0){
         headA=headA.next
         x--
        }
    }else{
        let x=n-m;
        while(x!=0){
         headB=headB.next
         x--
        }
    }
    while(headA!=headB){
           headA=headA.next;
           headB=headB.next
    }
    return headA
};