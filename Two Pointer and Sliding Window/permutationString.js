var checkInclusion = function(s1, s2) {
    let obj={}
    for(let i=0;i<s1.length;i++){
        if(!obj[s1[i]]){
            obj[s1[i]]=1
        }else{
            obj[s1[i]]++
        }
    }
    let i=j=0;
    let map={}
    while(j<s2.length){
        if(obj[s2[j]]){
            map[s2[j]]=1
        }else{
          len=j-i
          console.log(len, s2[i], s2[j])
          if(len==s1.length){
            return true
          }else{
            i++
            j++;
          }
        }
    }
    return false
    console.log(obj)
};

console.log(checkInclusion("ab","sdebalf"))

// console.log(checkInclusion("ab","sdeeakdbfla"))
