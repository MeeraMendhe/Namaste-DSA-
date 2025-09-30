function findEvenNumber(num){
    if(num===0)
        return "0 is not even nor odd number"
    if(num%2===0)
    {
        return "Number is Even"
    }
    else{
        return "Number is Odd"
    }
}

console.log(findEvenNumber(26))
console.log(findEvenNumber(13))
console.log(findEvenNumber(-1))
console.log(findEvenNumber(0))