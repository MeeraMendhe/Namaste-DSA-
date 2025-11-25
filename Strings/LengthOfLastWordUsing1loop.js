const lengthOfLastWord=(s)=>{
      let count=0;
    for(let i=s.length-1;i>=0;i--){
        
        if(count>0 && s[i]==" "){
            break;
        }else if(s[i]==" "){
            continue;
        }
        else{
            console.log(s[i])
            count++
        }
    }
    return count
}

console.log(lengthOfLastWord("Hellow world"))