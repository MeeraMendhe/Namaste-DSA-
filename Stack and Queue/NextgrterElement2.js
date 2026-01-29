var nextGreaterElements = function (nums) {
  nums = [...nums, ...nums];
  let stack = [];
  let ans = Array(nums.length - 1).fill(-1);

  stack.push(nums[nums.length - 1]);
  for (let i = nums.length - 2; i >= 0; i--) {
    while (stack.length) {
      if (nums[i] < stack[stack.length - 1]) {
        ans[i] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(nums[i]);
  }
  return ans.slice(0,nums.length / 2);
};
let s = [5, 4, 3, 2, 1];
console.log(nextGreaterElements(s));
