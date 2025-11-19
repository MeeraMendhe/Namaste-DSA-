/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let prev=0;
    let newList=new ListNode();
    let result=newList
    while(l1 || l2 || prev){
        let sum=(!l1?0:l1.val)+(!l2?0:l2.val)+prev;
        prev=Math.floor(sum/10);
        sum=sum%10
        let data=new ListNode(sum)
        newList.next=data;
        l1=l1&& l1.next;
        l2=l2&& l2.next;
        newList=newList.next;
    }
    return result.next
};