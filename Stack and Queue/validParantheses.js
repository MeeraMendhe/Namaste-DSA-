/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let map={
        "(":")",
        "{":"}",
        "[":"]"
    }
    for(let i=0;i<s.length;i++){
        if(map[s[i]]){
            stack.push(s[i])
        }else{
            let top=stack.pop();
            if(!top || map[top]!=s[i]){
                return false
            }
        }
    }
    return stack.length==0
};

let arr=[1,2,3,45,2,2,3,1,4,3,11,1,44,42,23,2,2,1]
let ans= [...new Set(arr)]
console.log(ans)