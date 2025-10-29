function selectionSort(arr){
    let n=arr.length
   for(let i=0;i<n-1;i++){
    let min=i;
    for(j=i+1;j<n;j++){
        if(arr[min]>arr[j])
        {
            min=j
        }
    }
    if(min!=i){
       [arr[i],arr[min]]=[arr[min],arr[i]]
    }
  
   }  
   return arr  
}

console.log(selectionSort([4,9,0,1,6,2]))