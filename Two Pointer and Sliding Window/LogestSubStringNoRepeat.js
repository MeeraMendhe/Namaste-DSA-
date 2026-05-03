/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 if(s==="") return 0   
 let arr=s.trim().split("")
 if(arr.length===0||arr.length===1) return 1
   let max=0
   let i=0;
   let j=0;
   let n=arr.length
   let obj={}
   while(i<n && j<n)
   {
     if(obj[arr[j]]===undefined)
     {
       obj[arr[j]]=1
       j++
       max=Math.max(max,j-i)
     }
     else
     {
       delete obj[arr[i]]
       i++
     }
   }
   return max
};