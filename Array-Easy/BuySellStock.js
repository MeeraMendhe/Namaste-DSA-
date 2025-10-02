/*/
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Example 3:
prices=[2,4,1]
output=2


/*/

var maxProfit = function (prices) {
  let max = 0;
  let n = prices.length;
  let min=prices[0]

  for(let i=1;i<n;i++)
  {
    if(max<prices[i]-min)
    {
        max=prices[i]-min
    }
    if(min>prices[i])
    {
        min=prices[i]
    }
  }
 
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
