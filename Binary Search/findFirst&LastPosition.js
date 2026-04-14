/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l=0
    let r= nums.length-1
    let ans=[-1,-1]

    while(l<r){
        let mid=Math.floor((r+l)/2)
        if(nums[mid]<target){
            l=mid+1
        }else{
            r=mid
        }
    }
    if(nums[l]==target){
        ans[0]=l
    }
    l=0
    r= nums.length-1
    
    while(l<r){
        let mid=l+Math.ceil((r-l)/2)
        if(nums[mid]>target){
           r=mid-1
        }else{
            l=mid
        }
    }
    if(nums[r]==target){
        ans[1]=r
    }

    return ans

};