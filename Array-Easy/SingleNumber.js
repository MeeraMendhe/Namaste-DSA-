var singleNumber = function(nums) {
      //bitwise operation use for this problem 
  //to minimize space complexity to zero
  // a xor a =0
  // a xor 0=a
  let xor=0;
  for(let i=0;i<nums.length;i++)
  {
    xor=xor^nums[i]
  }
  return xor
  // using hash
    // let obj={}
    // let result
    // for(let i=0;i<nums.length;i++)
    // {
    //     if(obj[nums[i]]==undefined)
    //     {
    //         obj[nums[i]]=1
    //     }else
    //     {
    //         obj[nums[i]]++
    //     }
    // }
    // for (const key in obj) 
    // {
    //    if(obj[key]==1)
    //    {
    //     result=key
    //    }
    // }
    // return result
};

console.log(singleNumber([4,1,2,1,2]))