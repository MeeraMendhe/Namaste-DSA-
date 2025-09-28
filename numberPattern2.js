/*//
1
2 2
3 3 3
4 4 4 4
//*/
function patterns(n){

    let str=""
    for(let i=0;i<n;i++){
        let pattern=""
        for(let j=0;j<=i;j++){
            pattern+=i+1+" "
        }
        str+=pattern+"\n"
    }
    return str
}

console.log(patterns(4))