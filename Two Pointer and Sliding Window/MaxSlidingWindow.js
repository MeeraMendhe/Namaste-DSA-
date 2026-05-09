var maxSlidingWindow = function(nums, k) {
  if (k <= 0 || nums.length === 0) return [];
  if (k === 1) return nums;
  if (k === nums.length) return [Math.max(...nums)];

  let subArr = nums.slice(0, k);
  let ans = [Math.max(...subArr)];

  for (let j = k; j < nums.length; j++) {
    subArr.shift();
    subArr.push(nums[j]);
    ans.push(Math.max(...subArr));
  }

  return ans;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))