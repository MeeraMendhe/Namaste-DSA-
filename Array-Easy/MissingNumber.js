var missingNumber = function(nums) {
    /*/
    let n=nums.length+1;
    let arr=new Array(n)
    for(let i=0;i<nums.length;i++)
    {
       arr[nums[i]]=nums[i]
    }
    let x=arr.findIndex(z=>z==undefined)
    return x
    /*/
    //my mathematical formula
    let n=nums.length
    cal=n*(n+1)
    cal=cal/2
    let val=0;
    for(let i=0;i<nums.length;i++)
    {
        val+=nums[i]
    }
    return cal-val
};

console.log(missingNumber([0,1]))