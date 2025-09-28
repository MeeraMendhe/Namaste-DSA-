/*//
1
1 2
1 2 3
1 2 3 4
//*/
function patterns(n){

    let str=""
    for(let i=0;i<n;i++){
        let pattern=""
        for(let j=0;j<=i;j++){
            pattern+=j+1+" "
        }
        str+=pattern+"\n"
    }
    return str
}

console.log(patterns(4))