/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams=(strs)=>{
 let obj={}
 for(let i=0;i<strs.length;i++){
     let val=strs[i].trim().split("").sort()
     if(obj[val]==undefined){
        obj[val]=[strs[i]]
     }else{
        obj[val].push(strs[i])
     }
    }
    return [...Object.values(obj)]

}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))