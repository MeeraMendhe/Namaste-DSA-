/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //FIND mid element in LinekdList

    let fast=slow=head;

    while(fast && fast.next)
    {
        fast=fast.next.next;
        slow=slow.next
    }

    // reverse the linkedList from mid 
    
    let prev=null;
    while(slow){
        let temp=slow.next;
        slow.next=prev;
        prev=slow;
        slow=temp
    }

    // check the palindrome;
    let first=head;
    let second=prev
    while(second){
        if(second.val!=first.val)
        {
            return false;
            break;
        }
        second=second.next;
        first=first.next
    }

    return true
};