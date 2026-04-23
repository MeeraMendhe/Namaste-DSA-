var isSubsequence = function(s, t) {
    if(t.length<s.length) return false

    let j=0;
    let i=0;
    while(i<t.length){
        if(t[i]==s[j]){
            i++;
            j++
        }else if(t[i]!=s[j]){
            i++
        }
    }
    if(j!=s.length) return false 
    else return true
};