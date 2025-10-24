var findMaxConsecutiveOnes = function(nums) {
    let max=0;
    let lastMax=0;
    for(let i=0;i<nums.length;i++)
    {
       if(nums[i]==1)
       {
        max++
       }
       else{
         if(lastMax<max)lastMax=max;
         max=0 
       }
    }
    return lastMax

};
console.log(findMaxConsecutiveOnes([1,0,0,1,0,0]))