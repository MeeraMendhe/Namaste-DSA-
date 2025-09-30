/*//
_ _ _ *
_ _ * *
_ * * *
* * * *
//*/
function patterns(n){

    let str=""
    for(let i=0;i<n;i++){
        let pattern=""
        for(let j=0;j<n-1-i;j++){
            pattern+="_ "
        }
        for(let j=0;j<=i;j++){
            pattern+="* "
        }
        str+=pattern+"\n"
    }
    return str
}

console.log(patterns(4))