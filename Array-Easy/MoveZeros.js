/*/
Given an integer array nums, move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
/*/
//O(N2)
var moveZeroes = function(nums) {
    /*/
    let n=nums.length
    let count=0
    for(let i=0;i<n;i++)
    {
        if(nums[i]==0)
        {
          nums.splice(i,1)
        }
    }
    return nums
    /*/
    let index = 0; // position for the next non-zero

    // Step 1: Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    // Step 2: Fill remaining positions with zeros
    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }

    return nums;
};

console.log(moveZeroes([0,0,1]))