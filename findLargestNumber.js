function findLargestNumber(arr){
     let largest=-Infinity;
     for(let i=0;i<arr.length;i++){
        if(largest<arr[i]){
            largest=arr[i]
        }
     }
     return largest
    }
 
    
console.log(findLargestNumber([2,4,1,-10,8,45,90,-33,-97]))    