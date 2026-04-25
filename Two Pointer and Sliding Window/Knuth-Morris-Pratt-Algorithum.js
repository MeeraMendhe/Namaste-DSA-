var strStr = function(haystack, needle) {
    let LPS=[0];
    let n=haystack.length;
    let m=needle.length;
    i=0;
    j=1;
    while(j<m){
        if(needle[i]==needle[j]){
            LPS[j]=i+1
            i++;
            j++;
        }else{
            if(i==0){
                LPS[j]=0;
                j++
            }else{
                i=LPS[i-1]
            }
        }
    }
    console.log(LPS)
    i=j=0
    while(i<n){
        if(haystack[i]==needle[j]){
            i++;
            j++;
        }else{
            if(j==0){
                i++
            }else{
                j=LPS[j-1]
            }
        }
        if(j==m){
            return i-m
        }
    }
    return -1

};

console.log(strStr("onionionsky", "onions"))