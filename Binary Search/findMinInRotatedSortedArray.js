var findMin = function(nums) {
    let l=0;
    let r=nums.length-1;
   
    while(l<=r){
       let mid=Math.floor((l+r)/2);
       if(nums[l]<=nums[r]) return nums[l]
       if(nums[mid]<nums[mid-1]){
           return nums[mid]
       }else if(nums[mid]<nums[l]){
           r=mid-1
       }else{
          l=mid+1
       }
    }
};

console.log(findMin([3,4,5,1,2]))