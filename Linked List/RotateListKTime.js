function calculateK(k,l){
    if(k<=l){
        return k
    }
    k=Math.floor(k/l)
    return calculateK(k,l)
}

console.log(calculateK(100,5))
