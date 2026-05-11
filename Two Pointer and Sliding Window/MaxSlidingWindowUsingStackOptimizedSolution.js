/**
 * Sliding Window Maximum using a monotonic deque (O(n) time).
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const n = nums.length;
  if (n === 0 || k <= 0) return [];
  if (k === 1) return nums.slice();

  const dq = [];        // stores indices, values are nums[dq[i]] in decreasing order
  const res = [];

  for (let i = 0; i < n; i++) {
    // 1) Remove indices that are out of the current window (left side)
    while (dq.length > 0 && dq[0] <= i - k) {
      dq.shift();
    }

    // 2) Maintain decreasing order: remove smaller or equal values from the back
    while (dq.length > 0 && nums[dq[dq.length - 1]] <= nums[i]) {
      dq.pop();
    }

    // 3) Add current index
    dq.push(i);

    // 4) Once we've processed at least k elements,
    //    the front of the deque is the max of the current window
    if (i >= k - 1) {
      res.push(nums[dq[0]]);
    }
  }

  return res;
}