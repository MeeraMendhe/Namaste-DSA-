function search(arr,target){
    let result=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target)
        {
            return result=i
        }
    }
    return result
}

console.log(search([1,4,7,0,2,5],  10))