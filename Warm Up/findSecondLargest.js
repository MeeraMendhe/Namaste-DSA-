function secondLargest(arr){
    if(arr.length<2){
        return -1
    }
    let largest=-Infinity;
    let secondLargest=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(largest<arr[i]){
            secondLargest=largest;
            largest=arr[i]
        }
        else if(largest>arr[i] &&arr[i]>secondLargest){
            secondLargest=arr[i]
        }
    }
    return secondLargest
}


console.log(secondLargest([-1,-4,-7,-23,-89,-8]))

//[2,4,6,1,20,27,18,43,21]