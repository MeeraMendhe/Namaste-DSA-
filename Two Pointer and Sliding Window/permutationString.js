var checkInclusion = function(s1, s2) {
 let hashS=Array(26).fill(0)
 let hashW=Array(26).fill(0)
 let window=s1.length
 for(let i=0;i<window;i++){
    ++hashS[s1.charCodeAt(i)-97]
    ++hashW[s2.charCodeAt(i)-97]
 }
 //console.log(hashS, hashW)
 let i=0;
 let j=window-1
 while(j<s2.length){
  if(isHashSame(hashS,hashW)){
    return true
  }else{
    --hashW[s2.charCodeAt(i)-97]
    i++
    j++
    ++hashW[s2.charCodeAt(j)-97]
  }
 }
 return false
};

const isHashSame=function(hashS, hashW){
    for(let i=0;i<26;i++){
        if(hashS[i]!=hashW[i]){
            return false
        }
    }
    return true
}

console.log(checkInclusion("ab","sdebalf"))

console.log(checkInclusion("ab","sdeeakdbfla"))
