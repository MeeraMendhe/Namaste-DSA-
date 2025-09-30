function findNumberInArray(arr, value){
    for(let i=0;i<arr.length;i++){
        if(value===arr[i]){
            return i
        }
    }
    return -1
}

console.log(findNumberInArray([20,17,23,45,21,56,87,90],23));
console.log(findNumberInArray([20,17,23,45,21,56,87,90],2));