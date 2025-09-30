function countNegativeNumberInArray(arr){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<0)
    {
        count++
    }
  }
  return count
}

console.log(countNegativeNumberInArray([1,3,4,-1,-56,2,-32,0,-37]));
console.log(countNegativeNumberInArray([1,3,4,2,0,90]))