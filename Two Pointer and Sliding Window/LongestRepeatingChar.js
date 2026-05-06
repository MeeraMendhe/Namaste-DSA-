/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
   let max=0
   let i=0;
   let j=0;
   let n=s.length
   let obj={}
   obj[s[0]]=1
   while(j<n)
   {
     if(isValidWindow(obj, k))
     {
       max=Math.max(max,j-i+1)
       j++
       obj[s[j]]=!obj[s[j]]?1:++obj[s[j]];
     }
     else
     {
       --obj[s[i]];
       i++
     }
   }
   return max
};
const isValidWindow=function(map,k){
    let totalCount=0;
    let maxCount=0;
    for(let i=0;i<26;i++){
        let char=String.fromCharCode(i+65);
        if(map[char]){
            totalCount+=map[char];
            maxCount=Math.max(maxCount, map[char])
        }
    }
    return totalCount-maxCount<=k
}



console.log(characterReplacement("AABB",2))