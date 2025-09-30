/*//
1
1 0 
1 0 1
1 0 1 0
1 0 1 0 1
//*/
function patterns(n){

    let str=""
    for(let i=0;i<n;i++){
        let pattern=""
        for(let j=0;j<=i;j++){
            if(j%2==0)
            {
                pattern+="1 "
            }
            else{
                pattern+="0 "
            }
        }
        str+=pattern+"\n"
    }
    return str
}

console.log(patterns(4))