/*/ 
Given an integer array nums and an integer val,
remove all occurrences of val in nums in-place. 
The order of the elements may be changed.
Then return the number of elements in nums which are not equal to val.

example
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5,
with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
/*/
var removeElement = function(nums, val) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        //shift element to left when it is not equal val
        if(nums[i]!=val)
        {
            nums[count]=nums[i]
            count++
        }
    }
   // console.log(nums)
    return count
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))