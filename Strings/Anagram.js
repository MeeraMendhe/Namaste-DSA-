/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj={}
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]==undefined){
            obj[s[i]]=1
        }else
        {
            obj[s[i]]++
        }
    }
    for(let i=0;i<t.length;i++){
        if(obj[t[i]]){
            if(obj[t[i]]>1){
                obj[t[i]]--
            }else{
                 delete obj[t[i]];
            }
        }
        else{
            return false
        }
    }
    if(Object.keys(obj).length==0){
        return true
    }else
    {
        return false
    }
};