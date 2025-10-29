function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let isSwap=false
        for(let j=0;j<arr.length-1-i;j++){
            console.log(i)
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1], arr[j]]
                isSwap=true;
            }
        }
        if(!isSwap) break;
    }
    return arr
}

console.log(bubbleSort([4,9,0,1,6,2,7,10,11,12,15,19,30]))