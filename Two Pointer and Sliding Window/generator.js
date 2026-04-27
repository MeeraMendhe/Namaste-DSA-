var generate = function(numRows) {
   let n=numRows
   let ans=[]
   for(let i=0;i<n;i++)
       {
           let arr=[]
           for(let j=0;j<=i;j++)
               {
                   if(j==0||j==i)
                       {
                           arr.push(1)
                       }
                   else
                       {
                           arr.push(ans[i-1][j]+ans[i-1][j-1])
                       }
               }
           ans.push(arr)
       }
    return ans
};