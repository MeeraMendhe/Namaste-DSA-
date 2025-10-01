//Remove Duplicates from Sorted Array
/*/
Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same. Then return the
number of unique elements in nums.

Meaning
sorted in non-decreasing  ==> a[i+1]>=a[i]
in-place ==> same array do not create new array
/*/
const removeDuplicates = function(nums) {
    let obj={};
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]==undefined)
        {
            obj[nums[i]]=1;
            nums[count++]=nums[i]
        }
    }
    return count
};

var removeDuplicate = function(nums) {
    
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[count]<nums[i])
        {
            count++
            nums[count]=nums[i]
        }
    }
    return count+1 // count is index value ,number of unique value is index+1 [0,1,2,3]
    //count value is 3 and unique values are 4
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
